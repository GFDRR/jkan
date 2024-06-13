---
contact_point:
  email: pchrzanowski@worldbank.org
  name: Pierre Chrzanowski
creator:
  name: GFDRR
  url: https://www.gfdrr.org
dataset_id: AFG_hzd-avalanche
description: Detailed avalanche study gathering historic avalanche data and performing
  numerical modeling of the avalanche runout potential and dynamics nationwide.
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
  hazard_analysis_type: probabilistic
  hazard_type: landslide
  intensity: kPa
  occurrence_range: 100 years
  processes: snow_avalanche
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
  description: Footprint masks for hazard exceeding 1kPa and 3 kPa.
  download_url: https://datacatalogfiles.worldbank.org/ddh-published/0050635/DR0065479/hzd-afg-ls-lav-kpa.zip
  format: gpkg
  id: '0'
  spatial_resolution: null
  title: Snow Avalanche hazard - 1kPa and 3 kPa
- coordinate_system: EPSG:32642
  description: Hazard map
  download_url: https://datacatalogfiles.worldbank.org/ddh-published/0050635/DR0065478/hzd-afg-ls-lav.zip
  format: geotiff
  id: '1'
  spatial_resolution: 20
  title: Snow Avalanche hazard
- coordinate_system: EPSG:32642
  description: Snow Water Equivalent (SWE) is calculated from EUWATCH data running
    from 1958 to 2002. The max grid cell values of each hydrological year where the
    accumulative SWE is taken. Then of the 44 years of modelled data the maximum of
    the aformentioned maximum values is taken. Unit is kg/m2. Only the 100 year return
    period scenario was computed.
  download_url: https://datacatalogfiles.worldbank.org/ddh-published/0050635/DR0065480/hzd-afg-ls-lav-rp100-swe.zip
  format: geotiff
  id: '2'
  spatial_resolution: 2000
  title: Snow Avalanche hazard - Snow Water Equivalents
risk_data_type:
- hazard
schema: rdl-02
spatial:
  countries:
  - AFG
  scale: national
title: Afghanistan Snow Avalanche hazard
version: '2018'
vulnerability: null
---
