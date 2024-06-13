---
contact_point:
  email: pchrzanowski@worldbank.org
  name: Pierre Chrzanowski
creator:
  name: GFDRR
  url: https://www.gfdrr.org
dataset_id: AFG_hzd-flood
description: Fluvial flood hazard is calculated based on probabilistic hydrological
  analysis models (precipitation into runoff) and hydrodynamic analysis (runoff into
  river flow and inundation, and flow over floodplain areas).
details: "To better understand natural hazard and disaster risk, the World Bank and\
  \ Global Facility for Disaster Reduction and Recovery (GFDRR) supported the development\
  \ of new \uFB02uvial \uFB02ood, \uFB02ash \uFB02ood, drought, landslide, avalanche\
  \ and seismic risk information in Afghanistan, as well as a frst-order analysis\
  \ of the costs and benefts of resilient reconstruction and risk reduction strategies.\
  \ This publication describes the applied methods and main results of the project."
exposure: null
hazard:
  calculation_method: simulated
  disaster_identifiers: ''
  hazard_analysis_type: empirical, probabilistic
  hazard_type: flood
  intensity: fl_wd:m
  occurrence_range: 5, 10, 20, 50, 100, 250, 500, 1000 years, 5, 100, 1000 years
  processes: fluvial_flood
license: CC-BY-4.0
loss: null
project: Afghanistan Multi-hazard risk assessment
publisher:
  name: GFDRR
  url: https://www.gfdrr.org
purpose: These maps have been derived on a nation-wide scale for the purpose of identifying
  high risk- areas on the district and provincial scale, from which decisions can
  be made on allocating efforts for more detailed site specific hazard and risk analysis.
  Use of this information on smaller scales should be applied with care. Importantly
  for on a local scale, it is often the case that more detailed case history and hazard
  information is required to perform such hazard and risk modelling, particularly
  where applied to dimension mitigation structures or strategies.
resources:
- coordinate_system: EPSG:32642
  description: Flood extent and water depth in Afghanistan for eight return period
    scenarios (5, 10, 20, 50, 100, 250, 500 and 1000 years) based on historical baseline.
  download_url: https://datacatalogfiles.worldbank.org/ddh-published/0050632/DR0065469/hzd-afg-fl-baseline.zip
  format: geotiff
  id: '0'
  spatial_resolution: 90
  title: Flood hazard scenarios - country (baseline)
- coordinate_system: EPSG:32642
  description: Flood extent and water depth in Afghanistan for eight return period
    scenarios (5, 10, 20, 50, 100, 250, 500 and 1000 years) based on climate projections
    for 2050.
  download_url: https://datacatalogfiles.worldbank.org/ddh-published/0050632/DR0065469/hzd-afg-fl-2050.zip
  format: geotiff
  id: '1'
  spatial_resolution: 90
  title: Flood hazard scenarios - country (2050)
- coordinate_system: EPSG:32642
  description: Flood extent and water depth in Kabul for three return period scenarios
    (5, 100 and 1000 years) based on historical baseline.
  download_url: https://datacatalogfiles.worldbank.org/ddh-published/0050632/DR0065472/hzd-afg-fl-kabul.zip
  format: geotiff
  id: '2'
  spatial_resolution: 10
  title: Flood hazard scenarios - Kabul (baseline)
- coordinate_system: EPSG:32642
  description: 'Flood extent and water depth simulated for four historical events:
    1978, 1991 (2 river floods), 1992 (flash flood and landslide) event.'
  download_url: https://datacatalogfiles.worldbank.org/ddh-published/0050632/DR0065471/hzd-afg-fl-hist_events.zip
  format: geotiff
  id: '3'
  spatial_resolution: 90
  title: Flood hazard scenarios - country (2050)
risk_data_type:
- hazard
schema: rdl-02
spatial:
  countries:
  - AFG
  scale: national
title: Afghanistan Flood hazard
version: '2018'
vulnerability: null
---
