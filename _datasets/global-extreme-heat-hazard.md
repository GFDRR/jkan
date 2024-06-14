---
contact_point:
  email: mamadio@worldbank.org
  name: Mattia Amadio
creator:
  name: VITO
  url: https://vito.be/en
dataset_id: VITO_WBGT
description: "Extreme Heat hazard described by the daily maximum Wet Bulb Globe Temperature\
  \ (WBGT \xB0C) for three return period scenarios."
details: "The WBGT is derived from global daily maximum air temperature contained\
  \ in ERA-Interim re-analysis fields for the period 1981-2010, which is considered\
  \ of sufficient length to provide robust climate statistics. The 0.75\xB0 lat/lon\
  \ fields are corrected for local-scale altitude effects by means of a high-resolution\
  \ global digital elevation model, resulting in global daily maximum WBGT fields\
  \ at a spatial resolution of approximately 10 km. These fields are temporally smoothed\
  \ using a 3-day filter, so as to account for the cumulative effects of prolonged\
  \ heat. These 30-year, 10-km resolution, 3-day smoothed daily maximum WBGT values\
  \ are then employed to fit a Generalized Extreme Value (GEV) probability distribution\
  \ function for each grid cell of the global domain. Considering return periods of\
  \ 5, 20, and 100 years, 10-km hazard intensity maps have been calculated for each\
  \ of these periods. To these hazard intensity maps, threshold values of 32\xB0C,\
  \ 28\xB0C and 25\xB0C, stemming from the scientific literature, subsequently are\
  \ applied, resulting in a global heat risk map."
exposure: null
hazard:
  calculation_method: simulated
  disaster_identifiers: ''
  hazard_analysis_type: probabilistic
  hazard_type: extreme_temperature
  intensity: WBGT:c
  occurrence_range: 5, 20, 100 years
  processes: extreme_heat
license: CC0-1.0
loss: null
project: VITO_WBGT
publisher:
  name: GFDRR
  url: https://www.gfdrr.org
purpose: null
resources:
- coordinate_system: EPSG:4326
  description: Global heat stress maps by return period (5, 20, 100 years)
  download_url: https://datacatalog.worldbank.org/search/dataset/0040194/Global-extreme-heat-hazard
  format: geotiff
  id: '0'
  spatial_resolution: 10000
  title: Heat stress global maps
risk_data_type:
- hazard
schema: rdl-02
spatial:
  countries:
  - GLO
  scale: global
title: Global extreme heat hazard
version: '2016'
vulnerability: null
---
