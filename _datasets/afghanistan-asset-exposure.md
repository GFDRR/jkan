---
contact_point:
  email: pchrzanowski@worldbank.org
  name: Pierre Chrzanowski
creator:
  name: GFDRR
  url: https://www.gfdrr.org
dataset_id: AFG_exp-asset
description: 'Collection of exposure datasets for risk assessment purpose in Afghanistan.
  Includes:

  - Location, area and USD value of rainfed and irrigated agricultural crops.

  - Total exposure value of buildings for different occupancy types: urban and rural
  structures, residential, non-residential, and industrial area. Values expressed
  as replacement cost (USD), area (m2), or number of elements (count).

  - Location, count and USD value (when available) for the following infrastructures
  in Afghanistan: airports, bridges, dams, health centers, hospitals, power plants,
  roads, schools and universities.

  - Population count and GDP value in USD for three macrosectors (Industry, Agriculture
  and Services) in Afghanistan.'
details: "To better understand natural hazard and disaster risk, the World Bank and\
  \ Global Facility for Disaster Reduction and Recovery (GFDRR) supported the development\
  \ of new \uFB02uvial \uFB02ood, \uFB02ash \uFB02ood, drought, landslide, avalanche\
  \ and seismic risk information in Afghanistan, as well as a frst-order analysis\
  \ of the costs and benefts of resilient reconstruction and risk reduction strategies.\
  \ This publication describes the applied methods and main results of the project."
exposure:
  category: buildings;infrastructures;agriculture;population
  dimension: content,structure
  quantity_kind: area,count,currency
  taxonomy: null
hazard: null
license: CC-BY-4.0
loss: null
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
  description: 'Buildings exposure for different occupancy types and materials: urban
    and rural structures, residential, non-residential, and industrial area. Values
    expressed as replacement cost (USD), area (m2), or number of elements (count).'
  download_url: https://datacatalogfiles.worldbank.org/ddh-published/0050638/DR0065490/exp-afg-buildings.zip
  format: geotiff
  id: '0'
  spatial_resolution: 90
  title: Buildings
- coordinate_system: EPSG:32642
  description: Location, count and USD value (when available) for airports, bridges,
    dams, health centers, hospitals, power plants, roads, schools and universities.
  download_url: https://datacatalogfiles.worldbank.org/ddh-published/0050638/DR0065491/exp-afg-infrastructures.zip
  format: geotiff
  id: '1'
  spatial_resolution: 90
  title: Infrastructures
- coordinate_system: EPSG:32642
  description: Location, area and USD value of rainfed and irrigated agricultural
    crops.
  download_url: https://datacatalogfiles.worldbank.org/ddh-published/0050638/DR0065489/exp-afg-agriculture.zip
  format: geotiff
  id: '2'
  spatial_resolution: 90
  title: Agriculture
- coordinate_system: EPSG:32642
  description: Population count and GDP value in USD for three macrosectors (Industry,
    Agriculture and Services).
  download_url: https://datacatalogfiles.worldbank.org/ddh-published/0050638/DR0065492/exp-afg-indicators.zip
  format: geotiff
  id: '3'
  spatial_resolution: 90
  title: Population and GDP
risk_data_type:
- exposure
schema: rdl-02
spatial:
  countries:
  - AFG
  scale: national
title: Afghanistan Asset exposure
version: '2018'
vulnerability: null
---
