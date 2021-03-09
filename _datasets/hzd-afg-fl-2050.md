---
schema: rdl
title: Afghanistan Flood hazard scenarios (2050)
organization: GFDRR
resources:
  - name: Afghanistan flood hazard scenario (2050)
    aggregation_type: Grid
    format: geotiff
    h-res: 90 m
    epsg: 32642 (WGS84 UTM42N)
    url: >-
      https://rdl-jkan-datasets.s3-ap-southeast-2.amazonaws.com/hazard/hzd-afg-fl-2050.zip
category:
  - Hazard
abstract: >-
  Flood extent and water depth in Afghanistan for eight return period
  scenarios: RP5, RP10, RP20, RP50, RP100, RP250, RP250 and RP1000 years.
notes: 'Representative Concentration Pathway RCP6.0 scenarios. Climate projections for 2050 were drawn from an ensemble of five global climate models (GCMs), to determine how precipitation and snowfall may increase or decrease. Three GCMs (GFDL, HadGEM, and NorESM) indicate  an increase in rainfall plus snowmelt, and two GCMs indicate a decrease in rainfall  plus snow melt (IPSL and Miroc). In other words, there does not appear to be a clear concept of climate change impacts on the Afghanistan hydrometeorology. In order to be conservative, the risk analysis for the year 2050 was conducted taking a relatively “dry” GCM (IPSL) for drought risk analysis and a relatively “wet” GCM (NorESM) for ﬂood risk analysis.'
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
event_hazard_type:
  - FL
analysis_type: Probabilistic
geo_area: ''
time_start: ''
time_end: ''
time_span: ''
time_year: '2050'
calculation_method: Simulated
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
