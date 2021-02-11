---
[//]: # RDL-attributes for JKAN
[//]: ## Contribution attributes and link to file
schema: rdl
title: SWIO RAFI Madagascar Earthquake Ground Shaking
category: Hazard
notes: This data set was produced with financial support from the European Union in the framework of the ACP-EU Natural Disaster Risk Reduction Program, managed by the Global Facility for Disaster Reduction and Recovery (GFDRR).
organization: GFDRR
source: SWIO RAFI
model_date: 2016
version: 1
purpose: Quantification of site specific risk of flood, earthquakes, tropical cyclones, storm surge and tsunamis, to support improvement in the resiliency and capacity of South West Indian Ocean island states through the creation of disaster risk financing strategies.
project: GFDRR South West Indian Ocean Risk Assessment and Financing Initiative (SWIO-RAFI)
bibliography: SWIO RAFI Report https://www.gfdrr.org/en/publication/southwest-indian-ocean-risk-assessment-and-financing-initiative-summary-report-and-risk
geo_coverage: MDG
resources:
  - name: 
    url: 'https://rdl-jkan-datasets.s3-ap-southeast-2.amazonaws.com/hazard/mdg-haz-eq.zip'
    format: geotiff

license: CC BY-SA 4.0

maintainer: GFDRR
maintainer_email: labs.gfdrr@gmail.com

[//]: # RDL-attributes: hazard fields
[//]: ## Event Set
event_hazard_type: Earthquake
geo_area_name:
event_time_start:
event_time_end:
event_time_duration:
event_description:
event_is_prob: True

[//]: ## Event 
event_calculation_method:
event_frequency:
event_occurence_probability: 10, 25, 50, 100, 250, 500, 10000
event_occurrence_time_start:
event_occurrence_time_end:
event_occurrence_time_span:
event_trigger_hazard_type:
event_trigger_process_type:
event_trigger_event:
event_description:

[//]: ## FootprintSet
footprintset_process_type: Ground Motion
footprintset_IMT: PGA, g
footprintset_data_uncertainty:

[//]: ## Footprint
footprint_uncertainty_2nd_moment:
footprint_trigger_footprint:
