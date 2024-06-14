---
contact_point:
  email: paola.ceresa@redrisk.com
  name: Paola Ceresa
creator:
  name: Ettore Faga
dataset_id: CA_SFRARR_EQ
description: null
details: null
exposure: null
hazard:
  calculation_method: simulated
  disaster_identifiers: ''
  hazard_analysis_type: probabilistic
  hazard_type: earthquake
  intensity: PGA:g
  occurrence_range: ''
  processes: ground_motion
license: CC-BY-SA-4.0
loss: null
project: SFRARR - Strengthening Financial Resilience and Accelerating Risk Reduction in Central Asia
publisher:
  name: RED - Risk, Engineering  Development - Pavia (Italy)
  url: https://www.redrisk.com
purpose: Regional risk modelling. These data have been derived on a regional scale
  for the purpose of consistent regional multi-country hazard and risk assessment.
  Application of this information on smaller scales should be done with care. Importantly
  on a local scale, it is often the case that more detailed history and hazard information
  is required to perform such hazard and risk modelling, particularly were applied
  to dimension mitigation structures or strategies., it is often the case that more
  detailed history and hazard information is required to perform such hazard and risk
  modelling, particularly were applied to dimension mitigation structures or strategies
resources:
- coordinate_system: null
  description: The harmonized earthquake catalogue included the earthquake events
    collected from different sources from historical time to 2020. Developed as part
    of the Strengthening Financial Resilience and Accelerating Risk Reduction in Central
    Asia program. (https://www.gfdrr.org/en/program/SFRARR-Central-Asia)
  download_url: https://datacatalog.worldbank.org/search/dataset/0064167
  format: csv
  id: CA_SFRARR_EQ_catalogue
  spatial_resolution: null
  title: Central Asia earthquake catalogue
- coordinate_system: null
  description: This dataset contains a selection of the active faults in central Asia
    from the AFEAD database converted to the geospatial GEM format. Developed as part
    of the Strengthening Financial Resilience and Accelerating Risk Reduction in Central
    Asia program. (https://www.gfdrr.org/en/program/SFRARR-Central-Asia)
  download_url: https://datacatalog.worldbank.org/search/dataset/0064168
  format: api
  id: CA_SFRARR_EQ_faultDB
  spatial_resolution: null
  title: Central Asia earthquake fault database
- coordinate_system: null
  description: The archive contains the OpenQuake input files for the calculation
    of the SFRARR probabilistic earthquake hazard model for central Asia. Developed
    as part of the Strengthening Financial Resilience and Accelerating Risk Reduction
    in Central Asia program. (https://www.gfdrr.org/en/program/SFRARR-Central-Asia)
  download_url: https://datacatalogfiles.worldbank.org/ddh-published/0064169/DR0090887/PSHA_OQ_Model.zip?versionId=2023-07-21T17:13:59.1976251Z
  format: api
  id: CA_SFRARR_EQ_Oqfiles
  spatial_resolution: null
  title: Central Asia PSHA OpenQuake model files
- coordinate_system: null
  description: Central Asia seismic stochastic event set. Developed as part of the
    Strengthening Financial Resilience and Accelerating Risk Reduction in Central
    Asia program. (https://www.gfdrr.org/en/program/SFRARR-Central-Asia)
  download_url: https://datacatalog.worldbank.org/search/dataset/0064233
  format: api
  id: CA_SFRARR_EQ_EventSet
  spatial_resolution: null
  title: Central Asia seismic stochastic event set
- coordinate_system: null
  description: Central Asia seismic hazard curves. Developed as part of the Strengthening
    Financial Resilience and Accelerating Risk Reduction in Central Asia program.
    (https://www.gfdrr.org/en/program/SFRARR-Central-Asia)
  download_url: https://datacatalog.worldbank.org/search/dataset/0064237
  format: csv
  id: CA_SFRARR_EQ_HazCurves
  spatial_resolution: null
  title: Central Asia seismic hazard curves
- coordinate_system: null
  description: Central Asia seismic hazard disaggregation. Developed as part of the
    Strengthening Financial Resilience and Accelerating Risk Reduction in Central
    Asia program. (https://www.gfdrr.org/en/program/SFRARR-Central-Asia)
  download_url: https://datacatalog.worldbank.org/search/dataset/0064235
  format: csv
  id: CA_SFRARR_EQ_HazDisagg
  spatial_resolution: null
  title: Central Asia seismic hazard disaggregation
- coordinate_system: null
  description: Selected earthquake footprint scenarios from the SFRARR Central Asia
    Probabilistic Earthquake Hazard Model computed with the OpenQuake calculation
    engine for six selected target sites. Developed as part of the Strengthening Financial
    Resilience and Accelerating Risk Reduction in Central Asia program. (https://www.gfdrr.org/en/program/SFRARR-Central-Asia)
  download_url: https://datacatalogfiles.worldbank.org/ddh-published/0064170/DR0090889/eq_scenario_[SITE]_PGA_[GMPE].zip?versionId=2023-07-21T17:18:56.7522490Z
  format: geotiff
  id: CA_SFRARR_EQ_ScenFootprints
  spatial_resolution: null
  title: Central Asia seismic hazard scenario footprints
- coordinate_system: null
  description: Hazard maps in Macroseismic intensity of the SFRARR Central Asia Probabilistic
    Earthquake Hazard Model computed with the OpenQuake calculation engine for a site
    grid of 0.2 degrees. Developed as part of the Strengthening Financial Resilience
    and Accelerating Risk Reduction in Central Asia program. (https://www.gfdrr.org/en/program/SFRARR-Central-Asia)
  download_url: https://datacatalogfiles.worldbank.org/ddh-published/0064171/DR0090891/hazard_map-mean_[SCALE].zip?versionId=2023-07-21T17:18:35.0695276Z
  format: geotiff
  id: CA_SFRARR_EQ_hazMapsIntensity
  spatial_resolution: null
  title: Central Asia seismic hazard maps - MKS and MCS intensity
- coordinate_system: null
  description: Georeferenced TIFF files including earthquake hazard maps in PGA for
    the different probability of exceedance (86, 63, 39, 18, 10, 9 and 5% in 50 years
    observation time, corresponding to 25, 50, 100, 250, 475, 500 and 1000 years return
    period). Developed as part of the Strengthening Financial Resilience and Accelerating
    Risk Reduction in Central Asia program. (https://www.gfdrr.org/en/program/SFRARR-Central-Asia)
  download_url: https://datacatalogfiles.worldbank.org/ddh-published/0064172/DR0091669/SFRARR_seismicHazardMaps.zip?versionId=2023-07-05T14:01:30.0430008Z
  format: geotiff
  id: CA_SFRARR_EQ_hazMapsPGA
  spatial_resolution: null
  title: Central Asia seismic return period hazard maps - PGA
risk_data_type:
- hazard
schema: rdl-02
spatial:
  bbox:
  - 46
  - 88
  - 34
  - 57
  countries:
  - KAZ
  - KGZ
  - TKM
  - TJK
  - UZB
  scale: regional
title: Central Asia seismic hazard maps
version: '2022'
vulnerability: null
---
