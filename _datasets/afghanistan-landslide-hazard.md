---
contact_point:
  email: pchrzanowski@worldbank.org
  name: Pierre Chrzanowski
creator:
  name: GFDRR
  url: https://www.gfdrr.org
dataset_id: AFG_hzd-landslide
description: Earthquake-induced landslide hazard measured as probability of occurrance
  for seven return period scenarios. National hazard assessment and focus on two areas
  (Kabul and Salang pass).
details: "To better understand natural hazard and disaster risk, the World Bank and\
  \ Global Facility for Disaster Reduction and Recovery (GFDRR) supported the development\
  \ of new \uFB02uvial \uFB02ood, \uFB02ash \uFB02ood, drought, landslide, avalanche\
  \ and seismic risk information in Afghanistan, as well as a frst-order analysis\
  \ of the costs and benefts of resilient reconstruction and risk reduction strategies.\
  \ This publication describes the applied methods and main results of the project."
exposure: null
hazard:
  calculation_method: inferred, simulated
  disaster_identifiers: ''
  hazard_analysis_type: deterministic, probabilistic
  hazard_type: landslide
  intensity: Debris flow intensity index
  occurrence_range: 10, 50, 100, 250, 500, 1000, 2500 years
  processes: landslide_general
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
  description: Simulated Ground Motion process triggered by earthquake measured as
    debris-flow intensity index
  download_url: https://datacatalogfiles.worldbank.org/ddh-published/0050634/DR0065476/hzd-afg-ls-eq-rp.zip
  format: geotiff
  id: '0'
  spatial_resolution: 30
  title: Landslide hazard RP scenarios
- coordinate_system: EPSG:32642
  description: 'Susceptibility map for bedrock landslides in slow evolution (S1),
    bedrock landslides in rapid evolution (S2) and cover material landslides in rapid
    evolution (S3) nationwide, including: rotational slides, translational slides,
    earth flows and lateral spreading.'
  download_url: https://datacatalogfiles.worldbank.org/ddh-published/0050634/DR0065476/hzd-afg-ls-eq-susceptibility.zip
  format: geotiff
  id: '1'
  spatial_resolution: 30
  title: Landslide susceptibility
risk_data_type:
- hazard
schema: rdl-02
spatial:
  countries:
  - AFG
  gazetteer_entries:
  - description: Kabul District
    id: AFG-KAB
    scheme: ISO 3166-2
  - description: Salang pass
    id: "K\u014Dtal-e S\u0101lang"
    scheme: GEONAMES
    uri: https://www.geonames.org/1127859/kotal-e-salang.html
  scale: national
title: Afghanistan Landslide hazard
version: '2018'
vulnerability: null
---
