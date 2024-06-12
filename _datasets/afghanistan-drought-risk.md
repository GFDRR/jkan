---
contact_point:
  email: pchrzanowski@worldbank.org
  name: Pierre Chrzanowski
creator:
  name: GFDRR
  url: https://www.gfdrr.org
dataset_id: AFG_lss-drought
description: Annual average losses in agricultural production (USD) and affected population,
  both for the baseline reference and future projections (2050)
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
  description: Agricultural losses (USD) aggregated for administrative boundaries
    (ADM1), Water availability as m3 per capita at Administrative level (ADM1)
  dimension: population, product
  exposure_id: AFG_exp-asset
  hazard_analysis_type: probabilistic
  hazard_id: AFG_hzd-drought
  hazard_process: agricultural_drought, socioeconomic_drought
  hazard_type: drought
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
  description: Water availability as m3 per capita at Administrative level (ADM1)
  download_url: https://datacatalogfiles.worldbank.org/ddh-published/0050636/DR0065483/lss-afg-dr-dts.zip
  format: gpkg
  id: '0'
  spatial_resolution: null
  title: 'Afghanistan Drought risk: water per capita'
- coordinate_system: EPSG:32642
  description: Agricultural losses (USD) aggregated for administrative boundaries
    (ADM1)
  download_url: https://datacatalogfiles.worldbank.org/ddh-published/0050636/DR0065482/lss-afg-dr-dta.zip
  format: gpkg
  id: '1'
  spatial_resolution: null
  title: 'Afghanistan Drought risk: agriculture'
- coordinate_system: null
  description: Water availability per capita as tables, and reference threshold values.
  download_url: https://datacatalogfiles.worldbank.org/ddh-published/0050636/DR0065484/lss-afg-dr-dts-tab.zip
  format: csv
  id: '2'
  spatial_resolution: null
  title: 'Afghanistan Drought risk: water per capita '
risk_data_type:
- loss
schema: rdl-02
spatial:
  countries:
  - AFG
  scale: national
title: Afghanistan Drought risk
version: '2018'
vulnerability: null
---
