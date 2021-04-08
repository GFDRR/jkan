---
schema: rdl
title: South Sudan Flood hazard scenarios
organization: GFDRR
filename: hzd-ssd-fl
resources:
  - name: South Sudan flood hazard extents
    aggregation_type: Footprints
    format:
      - gpkg
    resource_description: >-
      River flood hazard extents for RP 5, 20, 100, 250 years. Derived from
      FATHOM 2019 model.
    h-res: ''
    epsg: 4326 (WGS84)
    url: >-
      https://rdl-jkan-datasets.s3-ap-southeast-2.amazonaws.com/hazard/hzd-ssd-fl.gpkg
category:
  - Hazard
abstract: >-
  River flood hazard extents for South Sudan derived from FATHOM 2019 for RP 5,
  20, 100, 250 years.
notes: ''
source: FATHOM
model_date: '2019'
version: ''
purpose: ''
project: 'Disasters, conflict, and displacement: Intersectional risks in South Sudan'
biblio_title: >-
  World Bank (2020) - Disasters, conflict, and displacement: Intersectional
  risks in South Sudan
biblio_url: 'https://www.preventionweb.net/publications/view/73878'
geo_coverage:
  - SDN
license: 'https://creativecommons.org/licenses/by/4.0/'
maintainer: GFDRR
maintainer_email: contact@riskdatalibrary.org
hazard_type:
  - FL
analysis_type: Probabilistic
geo_area: ''
time_start: ''
time_end: ''
time_span: ''
time_year: ''
calculation_method: Simulated
frequency_type:
  - Return Period
return_period: '10, 20, 100, 250 years'
occurrence_time_start: ''
occurrence_time_end: ''
occurrence_time_span: ''
description: ''
process_type:
  - FFF
imt:
  - fl_wd_m
data_uncertainty: ''
---