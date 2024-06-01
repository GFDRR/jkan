---
contact_point:
  email: mamadio@worldbank.org
  name: Mattia Amadio
creator:
  name: Fathom
  url: https://www.fathom.global/
description: Probabilistic modelling of fluvial and pluvial flood hazard
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
  event_sets:
  - analysis_type: probabilistic
    calculation_method: simulated
    events:
    - calculation_method: simulated
      hazard:
        id: FFL
        intensity_measure: wd:cm
        processes:
        - fluvial_flood
        type: flood
      id: '5'
      occurrence:
        probabilistic:
          return_period: 5
    - calculation_method: simulated
      hazard:
        id: FFL
        intensity_measure: wd:cm
        processes:
        - fluvial_flood
        type: flood
      id: '10'
      occurrence:
        probabilistic:
          return_period: 10
    - calculation_method: simulated
      hazard:
        id: FFL
        intensity_measure: wd:cm
        processes:
        - fluvial_flood
        type: flood
      id: '20'
      occurrence:
        probabilistic:
          return_period: 20
    - calculation_method: simulated
      hazard:
        id: FFL
        intensity_measure: wd:cm
        processes:
        - fluvial_flood
        type: flood
      id: '50'
      occurrence:
        probabilistic:
          return_period: 50
    - calculation_method: simulated
      hazard:
        id: FFL
        intensity_measure: wd:cm
        processes:
        - fluvial_flood
        type: flood
      id: '100'
      occurrence:
        probabilistic:
          return_period: 100
    - calculation_method: simulated
      hazard:
        id: FFL
        intensity_measure: wd:cm
        processes:
        - fluvial_flood
        type: flood
      id: '200'
      occurrence:
        probabilistic:
          return_period: 200
    - calculation_method: simulated
      hazard:
        id: FFL
        intensity_measure: wd:cm
        processes:
        - fluvial_flood
        type: flood
      id: '500'
      occurrence:
        probabilistic:
          return_period: 500
    - calculation_method: simulated
      hazard:
        id: FFL
        intensity_measure: wd:cm
        processes:
        - fluvial_flood
        type: flood
      id: '1000'
      occurrence:
        probabilistic:
          return_period: 1000
    frequency_distribution: generalized_extreme_value
    hazards:
    - id: FFL
      intensity_measure: wd:cm
      processes:
      - fluvial_flood
      type: flood
    id: FFL_U
    occurrence_range: 1/10 to 1/1000 years
    seasonality: uniform
    spatial:
      bbox:
      - -180
      - -90
      - 180
      - 90
      scale: global
  - analysis_type: probabilistic
    calculation_method: simulated
    events:
    - calculation_method: simulated
      hazard:
        id: FFL
        intensity_measure: wd:cm
        processes:
        - fluvial_flood
        type: flood
      id: '5'
      occurrence:
        probabilistic:
          return_period: 5
    - calculation_method: simulated
      hazard:
        id: FFL
        intensity_measure: wd:cm
        processes:
        - fluvial_flood
        type: flood
      id: '10'
      occurrence:
        probabilistic:
          return_period: 10
    - calculation_method: simulated
      hazard:
        id: FFL
        intensity_measure: wd:cm
        processes:
        - fluvial_flood
        type: flood
      id: '20'
      occurrence:
        probabilistic:
          return_period: 20
    - calculation_method: simulated
      hazard:
        id: FFL
        intensity_measure: wd:cm
        processes:
        - fluvial_flood
        type: flood
      id: '50'
      occurrence:
        probabilistic:
          return_period: 50
    - calculation_method: simulated
      hazard:
        id: FFL
        intensity_measure: wd:cm
        processes:
        - fluvial_flood
        type: flood
      id: '100'
      occurrence:
        probabilistic:
          return_period: 100
    - calculation_method: simulated
      hazard:
        id: FFL
        intensity_measure: wd:cm
        processes:
        - fluvial_flood
        type: flood
      id: '200'
      occurrence:
        probabilistic:
          return_period: 200
    - calculation_method: simulated
      hazard:
        id: FFL
        intensity_measure: wd:cm
        processes:
        - fluvial_flood
        type: flood
      id: '500'
      occurrence:
        probabilistic:
          return_period: 500
    - calculation_method: simulated
      hazard:
        id: FFL
        intensity_measure: wd:cm
        processes:
        - fluvial_flood
        type: flood
      id: '1000'
      occurrence:
        probabilistic:
          return_period: 1000
    frequency_distribution: generalized_extreme_value
    hazards:
    - id: FFL
      intensity_measure: wd:cm
      processes:
      - fluvial_flood
      type: flood
    id: FFL_D
    occurrence_range: 1/10 to 1/1000 years
    seasonality: uniform
    spatial:
      bbox:
      - -180
      - -90
      - 180
      - 90
      scale: global
  - analysis_type: probabilistic
    calculation_method: simulated
    frequency_distribution: generalized_extreme_value
    hazards:
    - id: PFL
      intensity_measure: wd:cm
      processes:
      - pluvial_flood
      type: flood
    id: PFL_D
    occurrence_range: 1/10 to 1/1000 years
    seasonality: uniform
    spatial:
      bbox:
      - -180
      - -90
      - 180
      - 90
      scale: global
  - analysis_type: probabilistic
    calculation_method: simulated
    events:
    - calculation_method: simulated
      hazard:
        id: CFL
        intensity_measure: wd:cm
        processes:
        - coastal_flood
        type: flood
      id: '5'
      occurrence:
        probabilistic:
          return_period: 5
    - calculation_method: simulated
      hazard:
        id: CFL
        intensity_measure: wd:cm
        processes:
        - coastal_flood
        type: flood
      id: '10'
      occurrence:
        probabilistic:
          return_period: 10
    - calculation_method: simulated
      hazard:
        id: CFL
        intensity_measure: wd:cm
        processes:
        - coastal_flood
        type: flood
      id: '20'
      occurrence:
        probabilistic:
          return_period: 20
    - calculation_method: simulated
      hazard:
        id: CFL
        intensity_measure: wd:cm
        processes:
        - coastal_flood
        type: flood
      id: '50'
      occurrence:
        probabilistic:
          return_period: 50
    - calculation_method: simulated
      hazard:
        id: CFL
        intensity_measure: wd:cm
        processes:
        - coastal_flood
        type: flood
      id: '100'
      occurrence:
        probabilistic:
          return_period: 100
    - calculation_method: simulated
      hazard:
        id: CFL
        intensity_measure: wd:cm
        processes:
        - coastal_flood
        type: flood
      id: '200'
      occurrence:
        probabilistic:
          return_period: 200
    - calculation_method: simulated
      hazard:
        id: CFL
        intensity_measure: wd:cm
        processes:
        - coastal_flood
        type: flood
      id: '500'
      occurrence:
        probabilistic:
          return_period: 500
    - calculation_method: simulated
      hazard:
        id: CFL
        intensity_measure: wd:cm
        processes:
        - coastal_flood
        type: flood
      id: '1000'
      occurrence:
        probabilistic:
          return_period: 1000
    frequency_distribution: generalized_extreme_value
    hazards:
    - id: CFL
      intensity_measure: wd:cm
      processes:
      - coastal_flood
      type: flood
    id: CFL_U
    occurrence_range: 1/10 to 1/1000 years
    seasonality: uniform
    spatial:
      bbox:
      - -180
      - -90
      - 180
      - 90
      scale: global
  - analysis_type: probabilistic
    calculation_method: simulated
    events:
    - calculation_method: simulated
      hazard:
        id: CFL
        intensity_measure: wd:cm
        processes:
        - coastal_flood
        type: flood
      id: '5'
      occurrence:
        probabilistic:
          return_period: 5
    - calculation_method: simulated
      hazard:
        id: CFL
        intensity_measure: wd:cm
        processes:
        - coastal_flood
        type: flood
      id: '10'
      occurrence:
        probabilistic:
          return_period: 10
    - calculation_method: simulated
      hazard:
        id: CFL
        intensity_measure: wd:cm
        processes:
        - coastal_flood
        type: flood
      id: '20'
      occurrence:
        probabilistic:
          return_period: 20
    - calculation_method: simulated
      hazard:
        id: CFL
        intensity_measure: wd:cm
        processes:
        - coastal_flood
        type: flood
      id: '50'
      occurrence:
        probabilistic:
          return_period: 50
    - calculation_method: simulated
      hazard:
        id: CFL
        intensity_measure: wd:cm
        processes:
        - coastal_flood
        type: flood
      id: '100'
      occurrence:
        probabilistic:
          return_period: 100
    - calculation_method: simulated
      hazard:
        id: CFL
        intensity_measure: wd:cm
        processes:
        - coastal_flood
        type: flood
      id: '200'
      occurrence:
        probabilistic:
          return_period: 200
    - calculation_method: simulated
      hazard:
        id: CFL
        intensity_measure: wd:cm
        processes:
        - coastal_flood
        type: flood
      id: '500'
      occurrence:
        probabilistic:
          return_period: 500
    - calculation_method: simulated
      hazard:
        id: CFL
        intensity_measure: wd:cm
        processes:
        - coastal_flood
        type: flood
      id: '1000'
      occurrence:
        probabilistic:
          return_period: 1000
    frequency_distribution: generalized_extreme_value
    hazards:
    - id: CFL
      intensity_measure: wd:cm
      processes:
      - coastal_flood
      type: flood
    id: CFL_D
    occurrence_range: 1/10 to 1/1000 years
    seasonality: uniform
    spatial:
      bbox:
      - -180
      - -90
      - 180
      - 90
      scale: global
  - events:
    - calculation_method: simulated
      hazard:
        id: PFL
        intensity_measure: wd:cm
        processes:
        - pluvial_flood
        type: flood
      id: '5'
      occurrence:
        probabilistic:
          return_period: 5
    - calculation_method: simulated
      hazard:
        id: PFL
        intensity_measure: wd:cm
        processes:
        - pluvial_flood
        type: flood
      id: '10'
      occurrence:
        probabilistic:
          return_period: 10
    - calculation_method: simulated
      hazard:
        id: PFL
        intensity_measure: wd:cm
        processes:
        - pluvial_flood
        type: flood
      id: '20'
      occurrence:
        probabilistic:
          return_period: 20
    - calculation_method: simulated
      hazard:
        id: PFL
        intensity_measure: wd:cm
        processes:
        - pluvial_flood
        type: flood
      id: '50'
      occurrence:
        probabilistic:
          return_period: 50
    - calculation_method: simulated
      hazard:
        id: PFL
        intensity_measure: wd:cm
        processes:
        - pluvial_flood
        type: flood
      id: '100'
      occurrence:
        probabilistic:
          return_period: 100
    - calculation_method: simulated
      hazard:
        id: PFL
        intensity_measure: wd:cm
        processes:
        - pluvial_flood
        type: flood
      id: '200'
      occurrence:
        probabilistic:
          return_period: 200
    - calculation_method: simulated
      hazard:
        id: PFL
        intensity_measure: wd:cm
        processes:
        - pluvial_flood
        type: flood
      id: '500'
      occurrence:
        probabilistic:
          return_period: 500
    - calculation_method: simulated
      hazard:
        id: PFL
        intensity_measure: wd:cm
        processes:
        - pluvial_flood
        type: flood
      id: '1000'
      occurrence:
        probabilistic:
          return_period: 1000
    id: PFL_U
id: FTH_v3
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
  download_url: null
  format: geotiff
  id: FTH_form_WB
  spatial_resolution: 30
  title: Fathom v3 global dataset
risk_data_type:
- hazard
schema: 0.2_redux
spatial:
  bbox:
  - -180
  - -90
  - 180
  - 90
  scale: global
title: Global flood hazard maps
version: '3'
vulnerability: null
---
