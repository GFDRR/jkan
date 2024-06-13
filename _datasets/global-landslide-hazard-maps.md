---
contact_point:
  email: mamadio@worldbank.org
  name: Mattia Amadio
creator:
  name: ARUP
  url: https://www.arup.com
dataset_id: ARUP-LS
description: The Global Landslide hazard map is a gridded dataset of landslide hazard
  produced at the global scale. Landslides happen around the world and have devastating
  impacts on people and the built environment. To better understand the spatial and
  temporal distribution of landslide hazard worldwide, the World Bank and the Global
  Facility for Disaster Reduction and Recovery (GFDRR) commissioned Arup to undertake
  a landslide hazard assessment at a global scale. Using a global landslide inventory,
  landslide susceptibility information provided by NASA, and an innovative machine
  learning model, our geohazard and risk management experts produced a state-of-the-art
  quantitative landslide hazard map for the whole world.
details: "The dataset comprises gridded maps of estimated annual frequency of significant\
  \ landslides per square kilometre. Significant landslides are those which are likely\
  \ to have been reported had they occurred in a populated place; limited information\
  \ on reported landslide size makes it difficult to tie frequencies to size ranges\
  \ but broadly speaking would be at least greater than 100 m2. The data provides\
  \ frequency estimates for each grid cell on land between 60\xB0S and 72\xB0N for\
  \ landslides triggered by seismicity and rainfall. Applications of this dataset\
  \ include improved hazard screening based on frequency and severity, consistent\
  \ national, regional and global scale exposure assessment, estimates of annual expected\
  \ impact on population and the built environment."
exposure: null
hazard:
  calculation_method: inferred
  disaster_identifiers: ''
  hazard_analysis_type: deterministic
  hazard_type: landslide
  intensity: ls_hzd:-
  occurrence_range: ''
  processes: landslide_general
license: CC-BY-4.0
loss: null
project: null
publisher:
  name: GFDRR
  url: https://www.gfdrr.org
purpose: null
resources:
- coordinate_system: EPSG:4326
  description: Median global landslide hazard triggered by heavy rainfall trigger
  download_url: https://datacatalogfiles.worldbank.org/ddh-published/0037584/DR0045414/ls_rf_median_1980-2018.zip
  format: geotiff
  id: RF_trigger-med
  spatial_resolution: 1000
  title: Median rainfall landslide hazard
- coordinate_system: EPSG:4326
  description: Mean global landslide hazard triggered by heavy rainfall trigger
  download_url: https://datacatalogfiles.worldbank.org/ddh-published/0037584/DR0045413/ls_rf_mean_1980-2018.zip
  format: geotiff
  id: RF_trigger-mea
  spatial_resolution: 1000
  title: Mean rainfall landslide hazard
- coordinate_system: EPSG:4326
  description: Mean global landslide hazard triggered by earthquake
  download_url: https://datacatalogfiles.worldbank.org/ddh-published/0037584/DR0045412/ls_eq.zip
  format: geotiff
  id: EQ_trigger
  spatial_resolution: 1000
  title: Global landslide hazard triggered by earthquake (median)
risk_data_type:
- hazard
schema: rdl-02
spatial:
  countries:
  - GLO
  scale: global
title: Global landslide hazard maps
version: '1'
vulnerability: null
---
