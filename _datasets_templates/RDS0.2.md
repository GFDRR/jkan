---

schema: 0.2_redux

[//]: # Dataset metadata
title:
description:
risk_data_type:
  - hazard
  - exposure
  - vulnerability
  - loss
publisher:
version:
purpose:
project:
details:
spatial:
license:
contact_point:
creator:

[//]: # Resources
resources:
  - title:
  - description:
  - format:
  - coordinate_system:
  - spatial_resolution:
  - download_url: ''

[//]: # Hazard metadata
hazard:
  - hazard_type:
    - coastal_flood
    - convective_storm
    - drought
    - earthquake
    - extreme_temperature
    - flood
    - landslide 
    - multi_hazard
    - tsunami
    - volcanic
    - wildfire
    - strong_wind
  - processes:
    - coastal_flood
    - storm_surge
    - tornado
    - agricultural_drought
    - hydrological_drought
    - meteorological_drought
    - socioeconomic_drought
    - primary_rupture
    - secondary_rupture
    - ground_motion
    - liquefaction
    - extreme_cold
    - extreme_heat
    - fluvial_flood
    - pluvial_flood
    - groundwater_flood
    - snow_avalanche
    - landslide_general
    - landslide_rockslide
    - landslide_mudflow
    - landslide_rockfall
    - tsunami
    - ashfall
    - volcano_ballistics
    - lahar
    - lava
    - pyroclastic_flow
    - wildfire
    - extratropical_cyclone
    - tropical_cyclone
  - intensity:
  - hazard_analysis_type:
      - probabilistic
      - deterministic
      - empirical
  - calculation_method:
      - inferred
      - simulated
      - observed
  - occurrence_range:
  - disaster_identifiers:


[//]: # Exposure metadata
exposure:
[//]: ## Model
  - category:
      - agriculture
      - buildings
      - infrastructure
      - population
      - natural_environment
  - taxonomy:
[//]: ## Metric
  - dimension:
      - structure
      - content
      - product
      - others
  - quantity_kind:


[//]: # Vulnerability metadata
vulnerability:
[//]: ## Model
  - hazard_primary:
  - hazard_secondary:
  - hazard_process_primary:
  - hazard_process_secondary:
  - hazard_analysis_type:
      - deterministic
      - empirical
      - probabilistic
  - intensity:
  - category:
      - agriculture
      - buildings
      - infrastructure
      - population
      - natural_environment   
  - taxonomy:
[//]: ## Impact
  - type:
      - direct
      - indirect
      - total
  - metric:
  - unit:
  - base_data_type:
      - inferred
      - simulated
      - observed
  - approach:
      - analytical
      - empirical
      - hybrid
      - judgement
  - scale:
      - global
      - regional
      - sub-national
[//]: ## Cost
  - dimension:
      - structure
      - content
      - product
      - others
  - unit:
  - function_type:
      - vulnerability
      - fragility
      - damage-to-loss
      - engineering_demand
  - approach:
      - analytical
      - empirical
      - hybrid   
      - judgement
  - relationship:
      - discrete
      - math_bespoke
      - math_parametric


[//]: # Loss metadata
loss:
[//]: ## Model
  - hazard_type:
  - hazard_process:
  - description:
  - category:
      - agriculture
      - buildings
      - infrastructure
      - population
      - natural_environment    
  - dimension:
      - structure
      - content
      - product
      - others
[//]: ## Impact
  - impact_type:
      - direct
      - indirect
      - total
  - impact_metric:
  - impact_unit:
  - base_data_type:
      - inferred
      - simulated
      - observed
  - type:
      - ground_up
      - insured
      - gross
      - count
      - net_precat
      - net_postcat
  - approach:
      - analytical
      - empirical
      - hybrid   
      - judgement
    - hazard_analysis_type:
      - deterministic
      - empirical
      - probabilistic
  - hazard_id:
  - exposure_id:
  - vulnerability_id:

---