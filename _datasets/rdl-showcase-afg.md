---
schema: rdl-loss
title: RDL showcase data (Loss), Afghanistan
organization: SWIO RAFI
notes: Show case example data - SWIO RAFI data
model:
    - name: Name of source model
    - description: "Descriptor"
    - hazard_type: "EQ"
    - process_type: "PRO"
    - hazard_link: ""
    - exposure_link: ""
    - vulnerability_link: ""
loss_map:
    - occupancy: "Residential"
    - component: "Buildings"
    - loss_type: "Insured"
    - return_period: "all"
    - units: ""
    - metric: "AAL"
loss_map_values:
    - assert_ref: ""
    - loss: ""
loss_curve_map:
    - occupancy: "Residential"
    - component: "Buildings"
    - loss_type: "Ground Up"
    - frequency: "Rate of Exceedence"
    - investigation_time: 1
    - units: ""
loss_curve_map_values:
    - asset_ref: ""
    - losses: ""
    - rates: 0.2
resources:
  - name: Afghanistan all RPs Geopackage
    url: 'https://rdl-jkan-datasets.s3-ap-southeast-2.amazonaws.com/loss/AFG_showcase.gpkg'
    format: gpkg
  - name: Afghanistan all RPs Shapefile
    url: 'https://rdl-jkan-datasets.s3-ap-southeast-2.amazonaws.com/loss/AFG_showcase.zip'
    format: shp
license: 'https://creativecommons.org/licenses/by/4.0/'
category:
  - Loss
maintainer: Mattia Amadio
maintainer_email: n/a
---