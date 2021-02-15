---
schema: rdl
title: Afghanistan Flood hazard scenarios (Kabul)
category:
  - Hazard
notes: Flood extent and water depth in Kabul urban area for three return period scenarios: RP5, RP100 and RP1000 years.
organization: GFDRR
source: disasterrisk.af
model_date: 2018
version: 1
purpose: Assessment of disaster risk from natural hazards in Afghanistan for current and future scenarios
project: Afghanistan Disaster Risk Information GeoPortal
geo_coverage: AFG
resources:
  - name: Kabul flood hazard scenarios
    url: 'https://rdl-jkan-datasets.s3-ap-southeast-2.amazonaws.com/hazard/afg-haz-fl-kabul.zip'
    format: geotiff

license: CC BY 4.0

maintainer: GFDRR
maintainer_email: labs.gfdrr@gmail.com

[//]: # RDL-attributes: hazard fields
[//]: ## Event Set
event_hazard_type: "Flood"
geo_area_name: "Kabul"
event_time_start: ""
event_time_end: ""
event_time_duration: ""
event_description: ""
event_is_prob: "True"
h-resolution: "10 m"
z-resolution: ""

[//]: ## Event 
event_calculation_method: "Simulated"
event_frequency: ""
event_occurence_probability: "10, 100, 10000"
event_occurrence_time_start: ""
event_occurrence_time_end: ""
event_occurrence_time_span: ""
event_trigger_hazard_type: ""
event_trigger_process_type: ""
event_trigger_event: ""
event_description: ""

[//]: ## FootprintSet
footprintset_process_type: ""
footprintset_IMT: "Flood Water Depth (m)"
footprintset_data_uncertainty: ""

---