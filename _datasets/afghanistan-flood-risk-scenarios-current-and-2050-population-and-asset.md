---
schema: rdl
title: 'Afghanistan Flood risk scenarios, current and 2050 (population and asset)'
organization: GFDRR
notes: ''
resources:
  - name: Afghanistan all RPs Geopackage
    aggregation_type: Grid
    format: geopackage
    h-res: 90 m
    epsg: 32642 (WGS84 UTM42N)
    url: >-
      https://rdl-jkan-datasets.s3-ap-southeast-2.amazonaws.com/loss/lss-afg-fl.gpkg
category:
  - Loss
  - Indicators
abstract: >-
  Average Annual Losses (AAL) for current population (AALpop), current asset
  (AALnowUSD), population SSP scenarios at 2050 (AALpopSP1-5), asset SSP
  scenarios at 2050 (AAL_usd_SP1-5).
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
  - FL
process_type:
  - FFF
time_start: ''
time_end: ''
time_year: Baseline and 2050
occupancy:
  - Residential
val_type:
  - Structure
impact: Direct
loss_type: Ground up
frequency_type:
  - Probability
return_period: ''
metric: Annual Average Losses
val_unit: USD
hazard_link: 'http://jkan.riskdatalibrary.org/datasets/afg-loss-fl/'
exposure_link: ''
vulnerability_link: ''
---