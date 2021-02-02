---
schema: rdl-loss
title: RDL showcase data (Loss), Madagascar
organization: SWIO RAFI
notes: Show case example data - SWIO RAFI data
resources:
  - name: Madagascar all RPs Geopackage
    url: 'https://rdl-jkan-datasets.s3-ap-southeast-2.amazonaws.com/loss/MDG_showcase.gpkg'
    format: gpkg
  - name: Madagascar all RPs Shapefile
    url: 'https://rdl-jkan-datasets.s3-ap-southeast-2.amazonaws.com/loss/MDG_showcase.zip'
    format: shp
license: 'https://creativecommons.org/licenses/by/4.0/'
category:
  - Loss

maintainer: Mattia Amadio
maintainer_email: n/a

model:
  name: Name of source model
  description: "Descriptor"
  hazard_type: "EQ"
  process_type: "PRO"
  hazard_link: ""
  exposure_link: ""
  vulnerability_link: ""
map:
  - occupancy: "Residential"
  - component: "Buildings"
  - type: "Insured"
  - return_period: "all"
  - units: ""
  - metric: "AAL"
map_values:
  - asset_ref: ""
  - loss: ""
curve_map:
  - occupancy: "Residential"
  - component: "Buildings"
  - loss_type: "Ground Up"
  - frequency: "Rate of Exceedence"
  - investigation_time: 1
  - units: ""
curve_map_values:
  - asset_ref: ""
  - losses: ""
  - rates: 0.2
---