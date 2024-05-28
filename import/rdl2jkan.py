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


def make_dataset_frontmatter(dataset):
    """Formats RDL metadata into JKAN frontmatter for a dataset"""

    return {
        # required; throw if missing
        "contact_point": dataset["contact_point"],
        "creator": dataset["creator"],
        "id": dataset["id"],
        "license": dataset["license"],
        "publisher": dataset["publisher"],
        "resources": [make_resource(resource) for resource in dataset["resources"]],
        "risk_data_type": dataset["risk_data_type"],
        "schema": "0.2_redux",
        "spatial": dataset["spatial"],
        "title": dataset["title"], # required by write_yaml
        # optional
        "description": dataset.get("description"),
        "details": dataset.get("details"),
        "exposure": dataset.get("exposure"),
        "hazard": dataset.get("hazard"),
        "loss": dataset.get("loss"),
        "project": dataset.get("project"),
        "purpose": dataset.get("purpose"),
        "version": dataset.get("version"),
        "vulnerability": dataset.get("vulnerability"),
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
