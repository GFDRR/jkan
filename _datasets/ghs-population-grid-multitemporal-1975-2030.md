---
contact_point:
  email: jrc-ghsl-data@ec.europa.eu
  name: JRC GHSL
  url: https://data.jrc.ec.europa.eu/dataset/2ff68a52-5b5b-4a22-8f40-c41da8332cfe
creator:
  name: EC Joint Research Centre
  url: https://human-settlement.emergency.copernicus.eu/ghs_pop2023.php
dataset_id: GHSL_POP
description: 'The spatial raster dataset depicts the distribution of residential population,
  expressed as the number of people per cell. Residential population estimates between
  1975 and 2020 in 5-year intervals and projections to 2025 and 2030 derived from
  CIESIN GPWv4.11 were disaggregated from census or administrative units to grid cells,
  informed by the distribution, volume, and classification of built-up as mapped in
  the Global Human Settlement Layer (GHSL) global layer per corresponding epoch. '
details: 'This dataset is an update of the product released in 2022. Major improvements
  are the following: use of built-up volume maps (GHS-BUILT-V R2022A); use of more
  recent and detailed population estimates derived from GPWv4.11 integrating both
  UN World Population Prospects 2022 country population data and World Urbanisation
  Prospects 2018 data on Cities; revision of GPWv4.11 population growthrates by convergence
  to upper administrative level growthrates; systematic improvement of census coastlines;
  systematic revision of census units declared as unpopulated; integration of non-residential
  built-up volume information (GHS-BUILT-V_NRES R2023A); spatial resolution of 100m
  Mollweide (and 3 arcseconds in WGS84); projections to 2030.'
exposure:
  category: population
  dimension: population
  quantity_kind: count
  taxonomy: null
hazard: null
license: CC-BY-4.0
loss: null
project: GHSL - Global Human Settlement Layer
publisher:
  name: JRC
  url: https://human-settlement.emergency.copernicus.eu/
purpose: null
resources:
- coordinate_system: ESRI:54009
  description: The product is available for different epochs, resolutions and coordinate
    systems, but not all the combinations are available.
  download_url: https://human-settlement.emergency.copernicus.eu/download.php?ds=pop
  format: geotiff
  id: '0'
  spatial_resolution: null
  title: GHS population grid (R2023)
risk_data_type:
- exposure
schema: rdl-02
spatial:
  countries:
  - GLO
  scale: global
title: GHS population grid multitemporal (1975-2030)
version: R2023
vulnerability: null
---
