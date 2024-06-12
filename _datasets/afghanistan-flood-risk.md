---
contact_point:
  email: pchrzanowski@worldbank.org
  name: Pierre Chrzanowski
creator:
  name: GFDRR
  url: https://www.gfdrr.org
dataset_id: AFG_lss-flood
description: Average Annual Losses (AAL) for current population (AALpop), current
  asset (AALnowUSD), population SSP scenarios at 2050 (AALpopSP1-5), asset SSP scenarios
  at 2050 (AAL_usd_SP1-5).
details: "To better understand natural hazard and disaster risk, the World Bank and\
  \ Global Facility for Disaster Reduction and Recovery (GFDRR) supported the development\
  \ of new \uFB02uvial \uFB02ood, \uFB02ash \uFB02ood, drought, landslide, avalanche\
  \ and seismic risk information in Afghanistan, as well as a frst-order analysis\
  \ of the costs and benefts of resilient reconstruction and risk reduction strategies.\
  \ This publication describes the applied methods and main results of the project."
exposure: null
hazard: null
license: CC-BY-4.0
loss:
  approach: analytical
  base_data_type: inferred
  category: ''
  description: Average Annual Losses (AAL) for asset SSP scenarios at 2050 (AAL_usd_SP1-5),
    Average Annual Losses (AAL) for current asset (AALnowUSD), Average Annual Losses
    (AAL) for current population (AALpop), Average Annual Losses (AAL) for population
    SSP scenarios at 2050 (AALpopSP1-5)
  dimension: population, structure
  exposure_id: AFG_exp-asset
  hazard_analysis_type: probabilistic
  hazard_id: AFG_hzd-flood
  hazard_process: fluvial_flood
  hazard_type: flood
  impact_metric: at_risk_value, loss_annual_average_value
  impact_type: direct
  impact_unit: count
  type: gross
  vulnerability_id: ''
project: Afghanistan Multi-hazard risk assessment
publisher:
  name: GFDRR
  url: https://www.gfdrr.org
purpose: These maps have been derived on a nation-wide scale for the purpose of identifying
  high risk- areas on the district and provincial scale, from which decisions can
  be made on allocating efforts for more detailed site specific hazard and risk analysis.
  Use of this information on smaller scales should be applied with care. Importantly
  for on a local scale, it is often the case that more detailed case history and hazard
  information is required to perform such hazard and risk modelling, particularly
  where applied to dimension mitigation structures or strategies.
resources:
- coordinate_system: EPSG:32642
  description: Average Annual Losses (AAL) for current population (AALpop), current
    asset (AALnowUSD), population SSP scenarios at 2050 (AALpopSP1-5), asset SSP scenarios
    at 2050 (AAL_usd_SP1-5). Aggregated ad Administrative level (ADM1).
  download_url: https://datacatalogfiles.worldbank.org/ddh-published/0050637/DR0065486/lss-afg-fl-adm.zip
  format: gpkg
  id: '0'
  spatial_resolution: null
  title: Afghanistan AAL and RPs (baseline and 2050)
- coordinate_system: EPSG:32642
  description: Average Annual Losses (AAL) over physical asset in USD for baseline
    scenario.
  download_url: https://datacatalogfiles.worldbank.org/ddh-published/0050637/DR0065487/lss-afg-fl.zip
  format: geotiff
  id: '1'
  spatial_resolution: 90
  title: Afghanistan AAL and RPs (baseline)
risk_data_type:
- loss
schema: rdl-02
spatial:
  countries:
  - AFG
  scale: national
title: Afghanistan Flood risk
version: '2018'
vulnerability: null
---
