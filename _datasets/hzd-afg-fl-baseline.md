---
schema: rdl
title: Afghanistan Flood hazard scenarios (baseline)
organization: GFDRR
resources:
  - name: Afghanistan flood hazard scenario (baseline)
    aggregation_type: Grid
    format: geotiff
    h-res: 90 m
    epsg: 32642 (WGS84 UTM42N)
    url: >-
      https://rdl-jkan-datasets.s3-ap-southeast-2.amazonaws.com/hazard/hzd-afg-fl.zip
category:
  - Hazard
abstract: >-
  Flood extent and water depth in Afghanistan for eight return period
  scenarios: RP5, RP10, RP20, RP50, RP100, RP250, RP250 and RP1000 years.
source: AF-MHRA
model_date: '2016'
version: '1'
purpose: >-
  These maps have been derived on a nation-wide scale for the purpose of
  identifying high risk- areas on the district and provincial scale, from which
  decisions can be made on allocating efforts for more detailed site specific
  hazard and risk analysis. Use of this information on smaller scales should be
  applied with care. Importantly for on a local scale, it is often the case that
  more detailed case history and hazard information is required to perform such
  hazard and risk modelling, particularly where applied to dimension mitigation
  structures or strategies.
project: Afghanistan Multi-Hazard Risk Assessment (MHRA)
biblio_title: World Bank (2018) - Afghanistan Multi-Hazard Risk Assessment
biblio_url: 'https://www.gfdrr.org/sites/default/files/publication/Afghanistan_MHRA.pdf'
geo_coverage:
  - AFG
license: 'https://creativecommons.org/licenses/by/4.0/'
maintainer: GFDRR
maintainer_email: contact@riskdatalibrary.org
hazard_type:
  - FL
analysis_type: Probabilistic
geo_area: ''
time_start: '1958'
time_end: '2001'
time_span: '44 years'
time_year: ''
event_calculation_method: Simulated
frequency_type:
  - Return Period
return_period: '5, 10, 20, 50, 100, 250, 500, 1000 years'
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
