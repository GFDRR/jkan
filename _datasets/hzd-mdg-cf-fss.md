---
schema: rdl
title: Madagascar Storm Surge (tropical cyclone) hazard scenarios
organization: GFDRR
filename: hzd-mdg-cf-fss
resources:
  - name: Madagascar tropical cyclone storm surge water depth
    aggregation_type: Points or lines
    format:
      - gpkg
    resource_description: Flood depth from coastal storm surge at point locations
    h-res: ''
    epsg: 4326 (WGS84)
    url: >-
      https://development-data-hub-s3-public.s3.amazonaws.com/ddhfiles/571061/hzd-mdg-fl-fss.zip
category:
  - Hazard
abstract: >-
  Coastal Storm Surge hazard caused by tropical cyclones along the coast of
  Madagascar measured as the maximum water depth  for seven return period
  probabilistic scenarios.
notes: ''
source: SWIO-RAFI
model_date: '2016'
version: '1'
purpose: >-
  Quantification of site specific risk of flood, earthquakes, tropical cyclones,
  storm surge and tsunamis, to support improvement in the resiliency and
  capacity of South West Indian Ocean island states through the creation of
  disaster risk financing strategies.
project: >-
  GFDRR South West Indian Ocean Risk Assessment and Financing Initiative
  (SWIO-RAFI)
biblio_title: >-
  World Bank (2017) - Southwest Indian Ocean Risk Assessment and Financing
  Initiative: Final report on risk profiles
biblio_url: >-
  https://documents.worldbank.org/en/publication/documents-reports/documentdetail/951701497623912193/South-West-Indian-Ocean-risk-assessment-and-financing-initiative-SWIO-RAFI-summary-report
geo_coverage:
  - MDG
license: 'https://creativecommons.org/licenses/by/4.0/'
maintainer: GFDRR
maintainer_email: contact@riskdatalibrary.org
hazard_type:
  - CF
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
  - FSS
imt:
  - fl_wd_m
data_uncertainty: ''
---