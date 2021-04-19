---
schema: rdl
title: South Sudan Earthquake hazard scenarios
organization: GFDRR
filename: hzd-ssd-fl
resources:
  - name: South Sudan earthquake hazard (ground shaking)
    aggregation_type: Grid
    format:
      - Geotiff
    resource_description: >-
      Earthquake hazard intensity (g) for Sub Saharan Africa from GEM 2016.
    h-res: '10 km'
    epsg: 4326 (WGS84)
    url: >-
      https://rdl-jkan-datasets.s3-ap-southeast-2.amazonaws.com/hazard/hzd-ssd-eq.gpkg
category:
  - Hazard
abstract: >-
  Earthquake hazard intensity (g) for Sub Saharan Africa from Global Earthquake Model (GEM) 2016
  for RP 100, 475, 975, 2475 years.
notes: ''
source: GEM
model_date: '2016'
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
  - EQ
analysis_type: Probabilistic
geo_area: ''
time_start: ''
time_end: ''
time_span: ''
time_year: ''
event_calculation_method: Simulated
frequency_type:
  - Return Period
return_period: '100, 475, 975, 2475 years'
occurrence_time_start: ''
occurrence_time_end: ''
occurrence_time_span: ''
description: ''
process_type:
  - QGM
imt:
  - PGA_g
data_uncertainty: ''
---