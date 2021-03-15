---
schema: rdl
title: Afghanistan Landslide hazard scenarios
organization: GFDRR
filename: hzd-afg-ls-eq-rp
resources:
  - name: Afghanistan Landslide hazard scenarios
    aggregation_type: Grid
    format:
      - geotiff
    h-res: 30 m
    epsg: 32642 (WGS84 UTM42N)
    url: >-
      https://rdl-jkan-datasets.s3-ap-southeast-2.amazonaws.com/hazard/hzd-afg-ls-eq-rp.zip
category:
  - Hazard
abstract: >-
  Earthquake-induced landslide hazard measured as probability of occurrance for
  seven return periods: RP10, RP50, RP100, RP250, RP500 , RP1000 and RP2500
  years. 
notes: >-
  Earthquake-induced landslide hazard measured as probability of occurrance for
  seven return periods: RP10, RP50, RP100, RP250, RP500 , RP1000 and RP2500
  years. 
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
license: 'https://creativecommons.org/licenses/by-sa/4.0/'
maintainer: GFDRR
maintainer_email: contact@riskdatalibrary.org
hazard_type:
  - LS
analysis_type: Probabilistic
geo_area: ''
time_start: ''
time_end: ''
time_span: ''
time_year: ''
calculation_method: Simulated
frequency_type:
  - Return Period
return_period: '10, 50, 100, 250, 500, 1000, 2500 years'
occurrence_time_start: '1950'
occurrence_time_end: '2001'
occurrence_time_span: 50 years
trigger_process_type:
  - QGM
description: ''
process_type:
  - LSL
imt:
  - I_DF_m3/s2
data_uncertainty: ''
---
