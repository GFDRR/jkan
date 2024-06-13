---
contact_point:
  email: mamadio@worldbank.org
  name: Mattia Amadio
creator:
  name: Nadia Bloemendaal
  url: https://data.4tu.nl/authors/8a084c6a-3315-4ba7-9768-dd1ba1825dbc
dataset_id: STORM
description: Datasets containing probabilistic analysis of tropical cyclone maximum
  wind speed (in m/s). Return periods are generated using the STORM datasets.
details: Return periods were empirically calculated using Weibull's plotting formula.
  The STORM_FIXED_RETURN_PERIOD dataset contains maximum wind speeds for a fixed set
  of return periods at 10 km resolution in every ocean basin.
exposure: null
hazard:
  calculation_method: simulated
  disaster_identifiers: ''
  hazard_analysis_type: probabilistic
  hazard_type: strong_wind
  intensity: v_etc(10m):m/s
  occurrence_range: 1/10 to 1/10000 years
  processes: tropical_cyclone
license: CC0-1.0
loss: null
project: STORM
publisher:
  name: 4TU.Centre for Research Data
  url: https://data.4tu.nl/
purpose: null
resources:
- coordinate_system: EPSG:4326
  description: The GeoTIFFs provided in the original STORM datasets have been mosaicked
    into single files with global extent for each climate model/return period. STORM_FIXED_RETURN_PERIODS_{STORM_MODEL}_{STORM_RP}_YR_RP.tif
  download_url: null
  format: geotiff
  id: HST
  spatial_resolution: 10000
  title: Global tropical cyclone wind speed maps by return period (historical 1979-2014)
- coordinate_system: EPSG:4326
  description: The GeoTIFFs provided in the original STORM datasets have been mosaicked
    into single files with global extent for each climate model/return period. STORM_FIXED_RETURN_PERIODS_{STORM_MODEL}_{STORM_RP}_YR_RP.tif
  download_url: null
  format: geotiff
  id: PRJ_MEDIAN
  spatial_resolution: 10000
  title: Global tropical cyclone wind speed maps by return period (median projections
    2015-2050)
risk_data_type:
- hazard
schema: rdl-02
spatial:
  countries:
  - GLO
  scale: global
title: Global tropical cyclone (wind speed) hazard
version: '4'
vulnerability: null
---
