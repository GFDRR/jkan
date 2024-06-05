#!/usr/bin/python3

import argparse
import json
import os
import re
import unicodedata
from pathlib import Path

import yaml

generated_dir = "generated"
datasets_output_dir = f"{generated_dir}/_datasets"

# Copied Django's slugify from https://github.com/django/django/blob/main/django/utils/text.py
# It's somewhat overkill for our case (which is just generating valid filenames), but it's relatively
# short, we're familiar with it, and it should be thoroughly battle-tested at this point.
def slugify(value, allow_unicode=False):
    """
    Convert to ASCII if 'allow_unicode' is False. Convert spaces or repeated
    dashes to single dashes. Remove characters that aren't alphanumerics,
    underscores, or hyphens. Convert to lowercase. Also strip leading and
    trailing whitespace, dashes, and underscores.
    """
    value = str(value)
    if allow_unicode:
        value = unicodedata.normalize("NFKC", value)
    else:
        value = (
            unicodedata.normalize("NFKD", value)
            .encode("ascii", "ignore")
            .decode("ascii")
        )
    value = re.sub(r"[^\w\s-]", "", value.lower())
    return re.sub(r"[-\s]+", "-", value).strip("-_")


def make_resource(resource):
    """Convert RDL resource metadata into JKAN frontmatter"""
    return {
        # required; throw if missing
        "description": resource["description"],
        "format": resource["format"],
        "id": resource["id"],
        "title": resource["title"],
        # optional
        "coordinate_system": resource.get("coordinate_system"),
        "download_url": resource.get("download_url"),
        "spatial_resolution": resource.get("spatial_resolution"),
    }

def make_exposure(exposure):
    """Convert RDL exposure metadata into JKAN frontmatter"""
    if exposure is None:
        return None

    props_to_summarize = {
        "dimension": [], # found on metric
        "quantity_kind": [] # found on metric
    }

    if "metrics" in exposure:
        for metric in exposure["metrics"]:
            if metric["dimension"]:
                props_to_summarize["dimension"].append(metric["dimension"])
            if metric["quantity_kind"]:
                props_to_summarize["quantity_kind"].append(metric["quantity_kind"])

    return {
        # required; throw if missing
        "category": exposure["category"],
        # optional
        "taxonomy": exposure.get("taxonomy"),
        "dimension": ', '.join(sorted(set(props_to_summarize["dimension"]))),
        "quantity_kind": ', '.join(sorted(set(props_to_summarize["quantity_kind"]))),
    }

def make_hazard(hazard):
    """Convert RDL hazard metadata into JKAN frontmatter"""
    if hazard is None:
        return None

    props_to_summarize = {
        "calculation_method": [], # found on event, event_set
        "disaster_identifiers": [], # found on event
        "hazard_analysis_type": [], # found on event_set as analysis_type
        "hazard_type": hazard.get("type",[]), # found on hazard, event.hazard as type
        "intensity": hazard.get("intensity_measure",[]), # found on hazard, event.hazard as intensity_measure
        "occurrence_range": [], # found on event_set
        "processes": hazard.get("processes",[]), # found on hazard, event.hazard
    }
    
    for event_set in hazard["event_sets"]:
        if "calculation_method" in event_set:
            props_to_summarize["calculation_method"].append(event_set["calculation_method"])    
        if "analysis_type" in event_set:
            props_to_summarize["hazard_analysis_type"].append(event_set["analysis_type"])
        if "occurrence_range" in event_set:
            props_to_summarize["occurrence_range"].append(event_set["occurrence_range"])

        if "events" in event_set:
            for event in event_set["events"]:
                if "calculation_method" in event:
                    props_to_summarize["calculation_method"].append(event["calculation_method"])    
                if "disaster_identifiers" in event:
                    props_to_summarize["disaster_identifiers"].append(event["disaster_identifiers"])
                if "hazard" in event and "type" in event["hazard"]:
                    props_to_summarize["hazard_type"].append(event["hazard"]["type"])
                if "hazard" in event and "intensity_measure" in event["hazard"]:
                    props_to_summarize["intensity"].append(event["hazard"]["intensity_measure"])
                if "hazard" in event and "processes" in event["hazard"]:
                    props_to_summarize["processes"].extend(event["hazard"]["processes"])
    return {
        "calculation_method": ', '.join(sorted(set(props_to_summarize["calculation_method"]))),
        "disaster_identifiers": ', '.join(sorted(set(props_to_summarize["disaster_identifiers"]))),
        "hazard_analysis_type": ', '.join(sorted(set(props_to_summarize["hazard_analysis_type"]))),
        "hazard_type": ', '.join(sorted(set(props_to_summarize["hazard_type"]))),
        "intensity": ', '.join(sorted(set(props_to_summarize["intensity"]))),
        "occurrence_range": ', '.join(sorted(set(props_to_summarize["occurrence_range"]))),
        "processes": ', '.join(sorted(set(props_to_summarize["processes"])))
    }
 
def make_vulnerability(vulnerability):
    """Convert RDL vulnerability metadata into JKAN frontmatter"""
    if vulnerability is None:
        return None

    impact = vulnerability.get("impact")
    
    # TODO: will there ever actually be more than one function type present on a vulnerability?
    approach = []
    relationship = []
    function_type = []
    functions = vulnerability.get("functions")
    if "vulnerability" in functions:
        if "approach" in functions["vulnerability"]:
            approach.append(functions["vulnerability"]["approach"])
        if "relationship" in functions["vulnerability"]:
            relationship.append(functions["vulnerability"]["relationship"])
        function_type.append("vulnerability")
    if "fragility" in functions:
        if "approach" in functions["fragility"]:
            approach.append(functions["fragility"].get("approach"))
        if "relationship" in functions["fragility"]:
            relationship.append(functions["fragility"].get("relationship"))
        function_type.append("fragility")
    if "damage_to_loss" in functions:
        if "approach" in functions["damage_to_loss"]:
            approach.append(functions["damage_to_loss"].get("approach"))
        if "relationship" in functions["damage_to_loss"]:
            relationship.append(functions["damage_to_loss"].get("relationship"))
        function_type.append("damage_to_loss")
    if "engineering_demand" in functions:
        if "approach" in functions["engineering_demand"]:
            approach.append(functions["engineering_demand"].get("approach"))
        if "relationship" in functions["engineering_demand"]:
            relationship.append(functions["engineering_demand"].get("relationship"))
        function_type.append("engineering_demand")

    props_to_summarize = {
        "dimension": []
    }

    if "costs" in vulnerability:
        for cost in vulnerability["costs"]:
            if cost["dimension"]:
                props_to_summarize["dimension"].append(cost["dimension"])

    return {
        # required; throw if missing
        "approach": ', '.join(sorted(set(approach))),
        "base_data_type": impact.get("base_data_type"),
        "category": vulnerability.get("category"),
        "hazard_primary": vulnerability.get("hazard_primary"),
        "intensity": vulnerability.get("intensity"),
        "metric": impact.get("metric"),
        "relationship": ', '.join(sorted(set(relationship))),
        "scale": vulnerability.get("spatial").get("scale"),
        "type": impact.get("type"),
        "unit": impact.get("unit"),
        "dimension": ', '.join(sorted(set(props_to_summarize["dimension"]))),
        # TODO: verify this should be derived from the property under functions
        "function_type": ', '.join(sorted(set(function_type))),
        # optional
        "hazard_analysis_type": vulnerability.get("hazard_analysis_type"),
        "hazard_process_primary": vulnerability.get("hazard_process_primary"),
        "hazard_process_secondary": vulnerability.get("hazard_process_secondary"),
        "hazard_secondary": vulnerability.get("hazard_secondary"),
        "taxonomy": vulnerability.get("taxonomy"),
        # TODO: what is this? can't find on datasets or schema
        "calculation_method": vulnerability.get("calculation_method"),
    }


def make_loss(loss):
    """Convert RDL loss metadata into JKAN frontmatter"""
    if loss is None:
        return None

    return {
        "hazard_type": loss.get("hazard_type"),
        "hazard_process": loss.get("hazard_process"),
        "description": loss.get("description"),
        "category": loss.get("category"),
        "dimension": loss.get("dimension"),
        "impact_type": loss.get("impact_type"),
        "impact_metric": loss.get("impact_metric"),
        "impact_unit": loss.get("impact_unit"),
        "base_data_type": loss.get("base_data_type"),
        "type": loss.get("type"),
        "approach": loss.get("approach"),
        "hazard_analysis_type": loss.get("hazard_analysis_type"),
        "hazard_id": loss.get("hazard_id"),
        "exposure_id": loss.get("exposure_id"),
        "vulnerability_id": loss.get("vulnerability_id"),
    }

def make_dataset_frontmatter(dataset):
    """Formats RDL metadata into JKAN frontmatter for a dataset"""

    spatial = dataset["spatial"]
    if spatial.get("scale") == "global":
        if "countries" in spatial and type(spatial["countries"]) == list:
            spatial["countries"].append('GLO')
        else:
            spatial["countries"] = ['GLO']

    return {
        # required; throw if missing
        "contact_point": dataset["contact_point"],
        "creator": dataset["creator"],
        "id": dataset["id"],
        "license": dataset["license"],
        "publisher": dataset["publisher"],
        "resources": [make_resource(resource) for resource in dataset["resources"]],
        "risk_data_type": dataset["risk_data_type"],
        "schema": "rdl-02",
        "spatial": spatial,
        "title": dataset["title"], # required by write_yaml
        # optional
        "description": dataset.get("description"),
        "details": dataset.get("details"),
        "project": dataset.get("project"),
        "purpose": dataset.get("purpose"),
        "version": dataset.get("version"),
        # must include one of
        "exposure": make_exposure(dataset.get("exposure")),
        "hazard": make_hazard(dataset.get("hazard")),
        "loss": make_loss(dataset.get("loss")),
        "vulnerability": make_vulnerability(dataset.get("vulnerability")),
    }
    


def write_frontmatter(metadata, output_path):
    filename = (
        slugify(metadata.get("name", metadata["title"]), allow_unicode=True) + ".md"
    )
    with open((Path(output_path) / filename), "w") as outfile:
        outfile.write("---\n")
        outfile.write(yaml.dump(metadata))
        outfile.write("---\n")


if __name__ == "__main__":
    # Parse args
    parser = argparse.ArgumentParser(
        description="Convert RDL JSON datasets into JKAN frontmatter"
    )
    parser.add_argument(
        "--input_file",
        help="Path to a dump of RDL datasets, in JSON format",
        default="rdl_datasets.json",
        action="store",
    )
    args = parser.parse_args()
    # Create output paths if they don't already exist
    if not Path(generated_dir).is_dir():
        os.makedirs(generated_dir)
    if not Path(datasets_output_dir).is_dir():
        os.makedirs(datasets_output_dir)
   
    # Open input
    with open(args.input_file) as input_file:
        datasets_json = json.load(input_file)
        for dataset_json in datasets_json["datasets"]:
            # Generate output
            dataset_frontmatter = make_dataset_frontmatter(dataset_json)
            # Write output
            write_frontmatter(dataset_frontmatter, datasets_output_dir)

    print("Done! Look in the import README to see what to do with these files")
