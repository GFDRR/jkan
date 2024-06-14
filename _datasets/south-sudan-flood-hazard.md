---
contact_point:
  email: lloeschner@worldbank.org
  name: Lukas Loeschner
creator:
  email: mamadio@worldbank.org
  name: Mattia Amadio
dataset_id: SSD_hzd-flood
description: River flood hazard extent (perimeter) in South Sudan derived from FATHOM
  2019 for RP 5, 20, 100, 250 years; observed extent of 2019 flood from remote sensing.
details: null
exposure: null
hazard:
  calculation_method: simulated
  disaster_identifiers: FL-2019-000062-SSD; GLIDE
  hazard_analysis_type: probabilistic
  hazard_type: flood
  intensity: fl_wd:m
  occurrence_range: 5, 20, 100, 250 years
  processes: fluvial_flood
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
  description: River flood hazard extents for RP 5, 20, 100, 250 years. Derived from
    FATHOM 2019 model.
  download_url: https://datacatalogfiles.worldbank.org/ddh-published/0042413/DR0053205/hzd-ssd-fl.zip
  format: gpkg
  id: '0'
  spatial_resolution: null
  title: Flood hazard scenarios (baseline)
- coordinate_system: EPSG:4326
  description: Water extent from satellite imagery and flooded locations from events
    occurring Oct-Nov 2019 in South Sudan.
  download_url: https://datacatalogfiles.worldbank.org/ddh-published/0042413/DR0053206/hzd-ssd-fl-2019.zip
  format: gpkg
  id: '1'
  spatial_resolution: null
  title: Observed flood water extent (10-11/2019)
risk_data_type:
- hazard
schema: rdl-02
spatial:
  countries:
  - SSD
  scale: national
title: South Sudan Flood hazard
version: '2019'
vulnerability: null
---
