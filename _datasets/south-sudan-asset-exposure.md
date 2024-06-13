---
contact_point:
  email: lloeschner@worldbank.org
  name: Lukas Loeschner
creator:
  email: mamadio@worldbank.org
  name: Mattia Amadio
dataset_id: SSD_exp-asset
description: Collection of exposure data from Open Street Map, OCHA and World Bank,
  representing location and type of settlments, land use, buildings, health facilities
  and roads.
details: "To better understand natural hazard and disaster risk, the World Bank and\
  \ Global Facility for Disaster Reduction and Recovery (GFDRR) supported the development\
  \ of new \uFB02uvial \uFB02ood, \uFB02ash \uFB02ood, drought, landslide, avalanche\
  \ and seismic risk information in Afghanistan, as well as a frst-order analysis\
  \ of the costs and benefts of resilient reconstruction and risk reduction strategies.\
  \ This publication describes the applied methods and main results of the project."
exposure:
  category: buildings
  dimension: structure
  quantity_kind: area
  taxonomy: null
hazard: null
license: CC-BY-4.0
loss: null
project: South Sudan Multi-hazard risk assessment
publisher:
  name: GFDRR
  url: https://www.gfdrr.org
purpose: "The results of the analysis contribute to the production of knowledge for\
  \ disaster risk management (DRM) to support the World Bank\u2019s operational teams\
  \ in their in-country engagements. Specifcally, the key fndings of this study allow\
  \ to rank South Sudan states in terms of natural disasters risk, and to identify\
  \ the most critical components for each area. The output of this assessment includes\
  \ a geodatabase which contains both the key primary data and all the resulting maps\
  \ produced by the analysis, allowing risk analysts and managers to explore them\
  \ in detail using GIS software."
resources:
- coordinate_system: EPSG:4326
  description: Location and ranking of settlements from OCHA (2019)
  download_url: https://datacatalogfiles.worldbank.org/ddh-published/0042416/DR0053214/exp-ssd-settlements_ocha.zip
  format: gpkg
  id: '0'
  spatial_resolution: 90
  title: Settlements
- coordinate_system: EPSG:4326
  description: Buildings, land use, and roads polygons from OpenStreetMap
  download_url: https://datacatalogfiles.worldbank.org/ddh-published/0042416/DR0053213/exp-ssd-osm.zip
  format: gpkg
  id: '1'
  spatial_resolution: 90
  title: South Sudan buildings, land use and roads
- coordinate_system: EPSG:4326
  description: Location and ranking of health facilities from World Bank (2009)
  download_url: https://datacatalogfiles.worldbank.org/ddh-published/0042416/DR0053215/exp-ssd-health_wb.zip
  format: gpkg
  id: '2'
  spatial_resolution: 90
  title: Health facilities
risk_data_type:
- exposure
schema: rdl-02
spatial:
  countries:
  - SSD
  scale: national
title: South Sudan Asset exposure
version: '2019'
vulnerability: null
---
