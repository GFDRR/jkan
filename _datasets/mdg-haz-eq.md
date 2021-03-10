---
schema: rdl
title: SWIO-RAFI Madagascar Earthquake Ground Shaking
abstract: >-
  This data set was produced with financial support from the European Union in
  the framework of the ACP-EU Natural Disaster Risk Reduction Program, managed
  by the Global Facility for Disaster Reduction and Recovery (GFDRR).
organization: GFDRR
source: AIR Worldwide
resources:
  - name: SWIO-RAFI Madagascar Earthquake Ground Shaking
    url: https://rdl-jkan-datasets.s3-ap-southeast-2.amazonaws.com/hazard/mdg-haz-eq.zip
    format: geotiff
category:
  - Hazard
model_date: '2016'
version: '1'
purpose: Quantification of site specific risk of flood, earthquakes, tropical cyclones, storm surge and tsunamis, to support improvement in the resiliency and capacity of South West Indian Ocean island states through the creation of disaster risk financing strategies.
project: GFDRR South West Indian Ocean Risk Assessment and Financing Initiative (SWIO-RAFI)
bibliography: SWIO RAFI Report https://www.gfdrr.org/en/publication/southwest-indian-ocean-risk-assessment-and-financing-initiative-summary-report-and-risk
geo_coverage: MDG
license: 'https://creativecommons.org/licenses/by-sa/4.0/'

maintainer: GFDRR
maintainer_email: labs.gfdrr@gmail.com

[//]: # RDL-attributes: hazard fields
[//]: ## Event Set
event_hazard_type: "Earthquake"
event_is_prob: "True"

[//]: ## Event 
event_calculation_method: "Simulated"
event_occurence_probability: "10, 25, 50, 100, 250, 500, 1000"

[//]: ## FootprintSet
footprintset_process_type: "Ground motion"
footprintset_IMT: "Peak Ground Acceleration (g)"

---
