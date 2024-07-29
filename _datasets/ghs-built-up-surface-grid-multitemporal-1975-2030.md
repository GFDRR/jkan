---
contact_point:
  email: jrc-ghsl-data@ec.europa.eu
  name: JRC GHSL
  url: https://data.jrc.ec.europa.eu/dataset/9f06f36f-4b11-47ec-abb0-4f8b7b1d72ea
creator:
  name: EC Joint Research Centre
  url: https://human-settlement.emergency.copernicus.eu/ghs_buS2023.php
dataset_id: GHSL_BU-S
description: The spatial raster dataset depicts the distribution of the built-up (BU)
  surfaces estimates between 1975 and 2030 in 5 years intervals and two functional
  use components a) the total BU surface and b) the non-residential (NRES) BU surface.
  The data is made by spatial-temporal interpolation of five observed collections
  of multiple-sensor, multiple-platform satellite imageries. Landsat (MSS, TM, ETM
  sensor) supports the 1975, 1990, 2000, and 2014 epochs. Sentinel2 (S2) composite
  (GHS-composite-S2 R2020A) supports the 2018 epoch.
details: "The built-up surface fraction (BUFRAC) is estimated at 10m of spatial resolution\
  \ from the S2 image data, using as learning set a composite of data from GHS-BUILT-S2\
  \ R2020A, Facebook, Microsoft, and Open Street Map (OSM) building delineation. The\
  \ BUFRAC inference is made from the combination of quantized image features (reflectance,\
  \ derivative of morphological profile DMP) through associative rule learning applied\
  \ to spatial data analytics, which was introduced as symbolic machine learning (SML).\
  \ The non-residential (NRES) domain is predicted from S2 image data by observation\
  \ of radiometric, textural, and morphological features in an object-oriented image\
  \ processing framework. The multi-temporal dimension is provided by testing by the\
  \ SML the association between the combination of the quantized radiometric information\
  \ collected by the Landsat imagery in the past epochs, and the \u201Cbuilt-up\u201D\
  \ (BU) and \u201Cnon-built-up\u201D (NBU) class abstraction on image segments extracted\
  \ from S2 images. The spatial-temporal interpolation is solved by rank-optimal spatial\
  \ allocation using explanatory variables related to the landscape (slope, elevation,\
  \ distance to water, and distance to vegetation) and related to the observed dynamic\
  \ of BU surfaces in the past epochs."
exposure:
  category: buildings
  dimension: structure
  quantity_kind: area
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
  description: The spatial raster dataset depicts the distribution of built-up surfaces,
    expressed as number of square metres. The data report about the total built-up
    surface and the built-up surface allocated to dominant non-residential (NRES)
    uses. The product is available for different epochs, resolutions and coordinate
    systems, but not all the combinations are available.
  download_url: https://human-settlement.emergency.copernicus.eu/download.php?ds=bu
  format: geotiff
  id: '0'
  spatial_resolution: null
  title: GHS built-up surface (R2023)
risk_data_type:
- exposure
schema: rdl-02
spatial:
  countries:
  - GLO
  scale: global
title: GHS built-up surface grid multitemporal (1975-2030)
version: R2023
vulnerability: null
---
