---
schema: rdl
title: Madagascar tropical cyclone pluvial flood hazard scenarios
organization: GFDRR
filename: hzd-mdg-fl-tcy
resources:
  - name: Madagascar tropical cyclone pluvial flood
    aggregation_type: Grid
    format:
      - geotiff
    resource_description: ''
    h-res: 1 km
    epsg: 4326 (WGS84)
    url: >-
      https://rdl-jkan-datasets.s3-ap-southeast-2.amazonaws.com/hazard/hzd-mdg-fl-tcy.zip
category:
  - Hazard
abstract: >-
  Pluvial flood hazard triggered by extra-tropical cyclones over Madagascar
  measured as the maximum water depth for six return periods.
notes: ''
source: SWIO-RAFI
model_date: '2016'
version: '1'
purpose: ''
project: >-
  GFDRR South West Indian Ocean Risk Assessment and Financing Initiative
  (SWIO-RAFI)
biblio_title: >-
  World Bank (2017) - Southwest Indian Ocean Risk Assessment and Financing
  Initiative: Summary Report and Risk Profiles
biblio_url: >-
  https://www.gfdrr.org/en/publication/southwest-indian-ocean-risk-assessment-and-financing-initiative-summary-report-and-risk
geo_coverage:
  - MDG
license: 'https://creativecommons.org/licenses/by-sa/4.0/'
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
return_period: '25, 50, 100, 250, 500, 1000 years'
occurrence_time_start: ''
occurrence_time_end: ''
occurrence_time_span: ''
trigger_process_type:
  - TCY
description: ''
process_type:
  - FPF
imt:
  - fl_wd_m
data_uncertainty: ''
---