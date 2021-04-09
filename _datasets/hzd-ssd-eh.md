---
schema: rdl
title: South Sudan Extreme Heat hazard
organization: GFDRR
filename: hzd-ssd-eh
resources:
  - name: South Sudan WBGT max
    aggregation_type: Grid
    format:
      - Geotiff
    resource_description: >-
      Daily maximum Wet Bulb Globe Temperature (WBGT, in °C) from VITO
      dataset (2017).
    h-res: '1 km'
    epsg: 4326 (WGS84)
    url: >-
      https://rdl-jkan-datasets.s3-ap-southeast-2.amazonaws.com/hazard/hzd-ssd-eh-wbgt_max.zip
category:
  - Hazard
abstract: >-
  Daily maximum Wet Bulb Globe Temperature (WBGT, in °C)
notes: >-
  Heat stress studies in the scientific literature that make use of the WBGT
  apply thresholds of 28°C and 32°C to categorise heat stress risk. The damaging
  intensity thresholds are applied following this definition of slight/low (<28°C),
  moderate/high (28-32°C) and severe/very high (>32°C) heat stress.
source: VITO
model_date: '2017'
version: ''
purpose: >-
  The results of the analysis contribute to the production of knowledge for
  disaster risk management (DRM) to support the World Bank’s operational teams
  in their in-country engagements. Specifcally, the key fndings of this study
  allow to rank South Sudan states in terms of natural disasters risk, and to
  identify the most critical components for each area. The output of this
  assessment includes a geodatabase which contains both the key primary data and
  all the resulting maps produced by the analysis, allowing risk analysts and
  managers to explore them in detail using GIS software.
project: 'Disasters, conflict, and displacement: Intersectional risks in South Sudan'
biblio_title: >-
  World Bank (2020) - Disasters, conflict, and displacement: Intersectional
  risks in South Sudan
biblio_url: 'https://www.preventionweb.net/publications/view/73878'
geo_coverage:
  - SSD
license: 'https://creativecommons.org/licenses/by/4.0/'
maintainer: GFDRR
maintainer_email: contact@riskdatalibrary.org
hazard_type:
  - ET
analysis_type: Probabilistic
geo_area: ''
time_start: ''
time_end: ''
time_span: ''
time_year: ''
calculation_method: Simulated
frequency_type:
  - Return Period
return_period: '100 years'
occurrence_time_start: ''
occurrence_time_end: ''
occurrence_time_span: ''
description: ''
process_type:
  - EHT
imt:
  - WBGT_c
data_uncertainty: ''
---
