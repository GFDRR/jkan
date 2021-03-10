---
schema: rdl
title: Afghanistan Drought risk scenarios (baseline and 2050)
organization: GFDRR
filename: lss-afg-dr
resources:
  - name: 'Afghanistan Drought risk: agriculture'
    aggregation_type: Administrative boundaries
    format:
      - gpkg
    h-res: ''
    epsg: 32642 (WGS84 UTM42N)
    url: >-
      https://rdl-jkan-datasets.s3-ap-southeast-2.amazonaws.com/loss/lss-afg-dr-dta.gpkg
  - name: 'Afghanistan Drought risk: water per capita'
    aggregation_type: Administrative boundaries
    format:
      - gpkg
    h-res: ''
    epsg: 32642 (WGS84 UTM42N)
    url: >-
      https://rdl-jkan-datasets.s3-ap-southeast-2.amazonaws.com/loss/lss-afg-dr-dts.gpkg
  - name: 'Afghanistan Drought risk: water per capita'
    aggregation_type: Administrative boundaries
    format:
      - csv
    h-res: ''
    epsg: ''
    url: >-
      https://rdl-jkan-datasets.s3-ap-southeast-2.amazonaws.com/loss/lss-afg-dr-dta-tab.zip
category:
  - Loss
abstract: >-
  Annual average losses in agricultural production (USD) and affected
  population, both for the baseline reference and future (2050) situation .
notes: >-
  Annual average losses in agricultural production (USD) and affected
  population, both for the baseline reference and future (2050) situation .
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
  - DR
process_type:
  - DTA
  - DTS
time_start: ''
time_end: ''
time_year: ''
occupancy:
  - Crop
exposure_category:
  - 'Crops, livestock and forestry'
val_type:
  - Others
impact: Total
loss_type: Ground up
frequency_type:
  - Return
return_period: '10, 20, 50, 100, 250, 500, 1000 years'
metric: Annual Average Losses
val_unit: USD
hazard_link: 'http://jkan.riskdatalibrary.org/datasets/hzd-afg-dr/'
exposure_link: ''
vulnerability_link: ''
---
