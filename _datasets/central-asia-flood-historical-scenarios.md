---
contact_point:
  email: paola.ceresa@redrisk.com
  name: Paola Ceresa
creator:
  name: Gabriele Coccia
dataset_id: CA_SFRARR_FL_scenarios
description: 'Fluvial flood hazard map for the historical scenario of the Hamadoni
  flood on the Panj River (Tajikistan, June-July 2005) and realistic scenarios for
  100 years return period. '
details: null
exposure: null
hazard:
  calculation_method: inferred, simulated
  disaster_identifiers: 2005-0370-TJK; EMDAT
  hazard_analysis_type: deterministic
  hazard_type: flood
  intensity: wd:m
  occurrence_range: ''
  processes: fluvial_flood
license: CC-BY-SA-4.0
loss: null
project: SFRARR - Strengthening Financial Resilience and Accelerating Risk Reduction
  in Central Asia
publisher:
  name: RED - Risk, Engineering  Development - Pavia (Italy)
  url: https://www.redrisk.com/
purpose: Scenario modelling of selected floods representative of an extreme event
  in three countries (KGZ, TKM, UZB) and one historical scenario (TJK). Used for validation
  of flood modelling approach against historical observations and to communicate potential
  extreme flood impacts.
resources:
- coordinate_system: EPSG:4326
  description: Fluvial flood hazard map ( i.e., a map where each pixel represents
    the maximum water depth ) for the historical scenario of the Hamadoni flood on
    the Panj River (Hamadoni, Tajikistan, June-July 2005). The simulated hydrograph
    was estimated from data reported by JICA (https://openjicareport.jica.go.jp/pdf/11870748_01.pdf).
    We assumed a bankfull discharge of 3-year return time.
  download_url: https://datacatalogfiles.worldbank.org/ddh-published/0064165/DR0090876/maxwd_Hamadoni.tif?versionId=2023-07-21T17:20:16.5760431Z
  format: geotiff
  id: CA_SFRARR_Hamadoni
  spatial_resolution: null
  title: '2005_Flood_Panj_Hamadoni_TJK '
- coordinate_system: EPSG:4326
  description: 'Fluvial flood hazard maps for a realistic scenarios estiamted at 1-in-100
    years return period for Turkmenabat, Turkmenistan. Realistic scenarios were identified
    to assess potential floods that have not happened in the past but may affect the
    region in the future. For this reason, we asked our local experts in the consortium
    to provide indications on the areas where our realistic scenarios should be implemented.
    Specifically, we applied the following criteria: (1) flood prone area; (2) populated
    and built area exposed to flood risk; (3) floods happened in the area in the past.'
  download_url: https://datacatalogfiles.worldbank.org/ddh-published/0064166/DR0090880/Scenario_3_Turkmenabat_TKM_100y.tif?versionId=2023-07-21T17:20:00.4661664Z
  format: geotiff
  id: CA_SFRARR_FL_100y
  spatial_resolution: null
  title: 100y_Fl_scenario_Turkmenabat_TKM
risk_data_type:
- hazard
schema: rdl-02
spatial:
  bbox:
  - 69.415864227
  - 37.168360403
  - 70.215864563
  - 37.968361001
  countries:
  - KAZ
  - KGZ
  - TKM
  - TJK
  - UZB
  scale: sub-national
title: Central Asia flood historical scenarios
version: '2022'
vulnerability: null
---
