---
schema: rdl
title: South Sudan Wildfire hazard
organization: GFDRR
filename: hzd-ssd-wf
resources:
  - name: South Sudan Fire Water Index
    aggregation_type: Grid
    format:
      - Geotiff
    resource_description: >-
      FWI map derived from Vitolo et al. (2019), which measures the weather
      conditions (temperature, humidity) associated with wildfires.
      Vegetation layer is applied to mask the hazard areas, but no fuel model is applied.
    h-res: '77 km'
    epsg: 4326 (WGS84)
    url: >-
      https://rdl-jkan-datasets.s3-ap-southeast-2.amazonaws.com/hazard/hzd-ssd-wf-fwi_veg.zip
category:
  - Hazard
abstract: >-
  FWI map derived from Vitolo et al. (2019), which measures the weather
  conditions (temperature, humidity) associated with wildfires.
  Vegetation layer is applied to mask the hazard areas, but no fuel model is applied.
notes: ''
source: Vitolo et al.
model_date: '2019'
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
biblio_url: 'https://doi.org/10.1038/sdata.2019.32'
geo_coverage:
  - SSD
license: 'https://creativecommons.org/licenses/by/4.0/'
maintainer: GFDRR
maintainer_email: contact@riskdatalibrary.org
hazard_type:
  - WF
analysis_type: Probabilistic
geo_area: ''
time_start: ''
time_end: ''
time_span: ''
time_year: ''
calculation_method: Simulated
frequency_type:
  - Probability of Exceedence
return_period: ''
occurrence_time_start: '1980'
occurrence_time_end: '2018'
occurrence_time_span: '40 years'
description: ''
process_type:
  - WFI
imt:
  - FWI
data_uncertainty: ''
---