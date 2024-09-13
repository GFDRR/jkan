---
contact_point:
  email: mamadio@worldbank.org
  name: Mattia Amadio
creator:
  name: Fathom
  url: https://www.fathom.global/
dataset_id: FTH_v3
description: Third release of the probabilistic modelling of fluvial, pluvial and
  coastal flood hazard developed by Fathom. Includes baseline (2020) and projections
  (2030, 2050, 2080) under four different IPCC scenarios.
details: "The FATHOM flood-hazard model is a global gridded dataset of flood hazard\
  \ produced at the global scale. It provides flood extent and water depth to ground\
  \ (in centimeters) for three types of flood phenomena:\n- Fluvial (or river) flooding\
  \ occurs when a river exceeds its capacity and inundates surrounding areas.\n- Pluvial\
  \ (or surface water) flooding occurs when extreme rainfall exceeds surface drainage\
  \ capacity.\n- Coastal flooding occurs when a combination of storm-surge, tides\
  \ and waves lead to water levels that submerge the coastal land.\nThere are two\
  \ options for each flood type: Defended and Undefended (fluvial and coastal only).\
  \ Defended scenarios account for protection standards in proportion to country wealth\
  \ to reduce the chance of hazard occurrence. It does not take account location-specific\
  \ physical protection measures.\nThe model covers 4 time periods:\n- 2020 (present\
  \ baseline)\n- 2030 (near future)\n- 2050 (mid-century)\n- 2080 (far future)\nFuture\
  \ periods include 4 model realizations, each one describing a different climate\
  \ scenario:\n- SSP1 \u2013 2.6 (limited emissions)\n- SSP2 \u2013 4.5\n- SSP3 \u2013\
  \ 7.0\n- SSP5 \u2013 8.5 (high emissions)\nEach scenario set is made of 10 events\
  \ each representing a different intensity and probability of occurrence, expressed\
  \ as \u201Creturn period\u201D. These are framed as 1 in 5, 10, 20, 50, 100, 200,\
  \ 500 and 1,000 years. "
exposure: null
hazard:
  calculation_method: simulated
  disaster_identifiers: ''
  hazard_analysis_type: probabilistic
  hazard_type: flood, coastal_flood
  intensity: wd:cm
  occurrence_range: 1/10 to 1/1000 years
  processes: coastal_flood, fluvial_flood, pluvial_flood
license: Commercial
loss: null
project: null
publisher:
  name: Fathom
  url: https://www.fathom.global/
purpose: Fathom Global hazard maps can support risk screening and analysis at the
  sub-national level. Caution is advised when using these data as the only source
  of flood hazard information for site-specific analysis. The model is driven by global
  assumptions; it can provide a useful overview of the likely hazard in a particular
  area, however local data should be sought out before detailed planning or operational
  decisions are made. The data are not suitable for engineering-level analysis (such
  as construction of bridges or flood defences).
resources:
- coordinate_system: EPSG:4326
  description: Global country data - access limited to WB operations via request form
  download_url: https://forms.office.com/r/sG0qWTnC0L
  format: geotiff
  id: FTH_form_WB
  spatial_resolution: 30
  title: Fathom v3 global dataset
risk_data_type:
- hazard
schema: rdl-02
spatial:
  bbox:
  - -180
  - -90
  - 180
  - 90
  countries:
  - GLO
  scale: global
title: Global flood hazard maps
version: '3'
vulnerability: null
---
