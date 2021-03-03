---
schema: rdl
title: Afghanistan Flood hazard scenarios (Kabul)
organization: GFDRR
notes: >-
  Flood extent and water depth in Kabul urban area for three return period
  scenarios: RP5, RP100 and RP1000 years.
resources:
  - name: Kabul flood hazard scenarios
    aggregation_type: Grid
    format: geotiff
    h-res: 10 m
    epsg: 32642 (WGS84 UTM42N)
    url: >-
      https://rdl-jkan-datasets.s3-ap-southeast-2.amazonaws.com/hazard/hzd-afg-fl-kabul.zip
category:
  - Hazard
abstract: >-
  Flood extent and water depth in Kabul urban area for three return period
  scenarios: RP5, RP100 and RP1000 years.
source: AF-MHRA
model_date: '2016'
version: '1'
purpose: >-
  This flood hazard map for Kabul (district 1 and suroundings) has been derived
  on a relatievely detailed scale. This was done for the purpose of a very
  detailed flood hazard and flood risk analysis.
project: Afghanistan Multi-Hazard Risk Assessment (MHRA)
biblio_title: World Bank (2018) - Afghanistan Multi-Hazard Risk Assessment
biblio_url: 'https://www.gfdrr.org/sites/default/files/publication/Afghanistan_MHRA.pdf'
geo_coverage:
  - AFG
license: 'https://creativecommons.org/licenses/by-sa/4.0/'
maintainer: GFDRR
maintainer_email: contact@riskdatalibrary.org
event_hazard_type:
  - FL
analysis_type: Probabilistic
geo_area: Kabul
time_start: ''
time_end: ''
time_span: ''
time_year: ''
calculation_method: Simulated
frequency_type:
  - Return
return_period: '5, 100, 1000 years'
occurrence_time_start: ''
occurrence_time_end: ''
occurrence_time_span: ''
trigger_hazard_type: ''
trigger_process_type: ''
description: ''
process_type:
  - FFF
imt:
  - fl_wd_m
data_uncertainty: ''
---
