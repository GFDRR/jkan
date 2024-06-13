---
contact_point:
  email: pchrzanowski@worldbank.org
  name: Pierre Chrzanowski
creator:
  name: GFDRR
  url: https://www.gfdrr.org
dataset_id: SWIO_hzd-earthquake
description: Earthquake hazard map representing Peak ground acceleration (PGA-g) for
  six return period scenarios.
details: This data set was produced with financial support from the European Union
  in the framework of the ACP-EU Natural Disaster Risk Reduction Program, managed
  by the Global Facility for Disaster Reduction and Recovery (GFDRR).
exposure: null
hazard:
  calculation_method: simulated
  disaster_identifiers: ''
  hazard_analysis_type: probabilistic
  hazard_type: earthquake
  intensity: PGA:g
  occurrence_range: 10, 25, 50, 100, 250, 500 and 1000 years
  processes: ground_motion
license: CC-BY-4.0
loss: null
project: SWIO-RAFI
publisher:
  name: GFDRR
  url: https://www.gfdrr.org
purpose: 'The goal of the South West Indian Ocean Risk Assessment and Financing Initiative
  (SWIO RAFI) is to improve the resiliency and capacity of the island states through
  the creation of disaster risk financing strategies. A key component of this effort
  involves the quantification of site specific risk from the perils of flood, earthquakes,
  and tropical cyclones as well as their secondary hazards of storm surge and tsunamis.

  Regional hazard intensity calculations were applied to 10,000 years of Stochastic
  catalogs derived from the historical records to produce hazard intensity profiles
  at mean return periods of 25, 50, 100, 250, 500 and 1,000 years. All datasets are
  at their original resolution (0.00083) except for Madagascar (0.0032) which was
  resampled to reduce file sizes.'
resources:
- coordinate_system: EPSG:4326
  description: Earthquake hazard map representing Peak ground acceleration (PGA) measured
    in units of g for seven return period scenarios (10, 25, 50, 100, 250, 500 and
    1000 years).
  download_url: https://datacatalogfiles.worldbank.org/ddh-published/0038594/DR0054346/hzd-com-eq.zip
  format: geotiff
  id: COM
  spatial_resolution: 1000
  title: Comoros - Earthquake ground shaking hazard scenarios
- coordinate_system: EPSG:4326
  description: Earthquake hazard map representing Peak ground acceleration (PGA) measured
    in units of g for seven return period scenarios (10, 25, 50, 100, 250, 500 and
    1000 years).
  download_url: https://datacatalogfiles.worldbank.org/ddh-published/0038594/DR0054346/hzd-mdg-eq.zip
  format: geotiff
  id: MDG
  spatial_resolution: 1000
  title: Madagascar - Earthquake ground shaking hazard scenarios
- coordinate_system: EPSG:4326
  description: Earthquake hazard map representing Peak ground acceleration (PGA) measured
    in units of g for seven return period scenarios (10, 25, 50, 100, 250, 500 and
    1000 years).
  download_url: https://datacatalogfiles.worldbank.org/ddh-published/0038594/DR0054346/hzd-mus-eq.zip
  format: geotiff
  id: MUS
  spatial_resolution: 1000
  title: Mauritius - Earthquake ground shaking hazard scenarios
- coordinate_system: EPSG:4326
  description: Earthquake hazard map representing Peak ground acceleration (PGA) measured
    in units of g for seven return period scenarios (10, 25, 50, 100, 250, 500 and
    1000 years).
  download_url: https://datacatalogfiles.worldbank.org/ddh-published/0038594/DR0054346/hzd-syc-eq.zip
  format: geotiff
  id: SYC
  spatial_resolution: 1000
  title: Seychelles - Earthquake ground shaking hazard scenarios
- coordinate_system: EPSG:4326
  description: Earthquake hazard map representing Peak ground acceleration (PGA) measured
    in units of g for seven return period scenarios (10, 25, 50, 100, 250, 500 and
    1000 years).
  download_url: https://datacatalogfiles.worldbank.org/ddh-published/0038594/DR0054346/hzd-zan-eq.zip
  format: geotiff
  id: ZAN
  spatial_resolution: 1000
  title: Zanzibar - Earthquake ground shaking hazard scenarios
risk_data_type:
- hazard
schema: rdl-02
spatial:
  countries:
  - COM
  - MDG
  - MUS
  - SYC
  - TZA
  scale: regional
title: South West Indian Ocean Earthquake hazard
version: '2017'
vulnerability: null
---
