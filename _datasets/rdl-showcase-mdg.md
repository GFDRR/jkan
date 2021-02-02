---
schema: rdl
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


<!-- Model fields -->
model_name: Name of source model
model_description: "Descriptor"
model_hazard_type: "EQ"
model_process_type: "PRO"
model_hazard_link: ""
model_exposure_link: ""
model_vulnerability_link: ""

<!-- Map fields -->
map_occupancy: "Residential"
map_component: "Buildings"
map_loss_type: "Insured"
map_return_period: "all"
map_units: ""
map_metric: "AAL"

<!-- Map values -->
map_values_asset_ref: ""
map_values_loss: ""

<!-- Curve map -->
curve_map_occupancy: "Residential"
curve_map_component: "Buildings"
curve_map_type: "Ground Up"
curve_map_frequency: "Rate of Exceedence"
curve_map_investigation_time: 1
curve_map_units: ""

<!-- Curve map values -->
curve_map_values_asset_ref: ""
curve_map_values_losses: ""
curve_map_values_rates: 0.2
---