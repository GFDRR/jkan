---
contact_point:
  email: pchrzanowski@worldbank.org
  name: Pierre Chrzanowski
creator:
  name: GFDRR
  url: https://www.gfdrr.org
dataset_id: SWIO_hzd-strong_wind
description: Strong Wind hazard caused by tropical cyclones measured as the maximum
  one-minute sustained wind speed (kph) at 10 meters above the ground surface.
details: This data set was produced with financial support from the European Union
  in the framework of the ACP-EU Natural Disaster Risk Reduction Program, managed
  by the Global Facility for Disaster Reduction and Recovery (GFDRR).
exposure: null
hazard:
  calculation_method: inferred, simulated
  disaster_identifiers: ''
  hazard_analysis_type: probabilistic
  hazard_type: strong_wind
  intensity: v_etc(10m):km/h
  occurrence_range: 10, 25, 50, 100, 250, 500 and 1000 years
  processes: tropical_cyclone
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
  description: Strong Wind hazard caused by tropical cyclones over Comoros measured
    as the maximum one-minute sustained wind speed (kph) at 10 meters above the ground
    surface.
  download_url: https://datacatalogfiles.worldbank.org/ddh-published/0038599/DR0054350/hzd-com-wi.zip
  format: geotiff
  id: COM
  spatial_resolution: 90
  title: Comoros - Flood hazard scenarios (tropical cyclones)
- coordinate_system: EPSG:4326
  description: Strong Wind hazard caused by tropical cyclones over Madagascar measured
    as the maximum one-minute sustained wind speed (kph) at 10 meters above the ground
    surface.
  download_url: https://datacatalogfiles.worldbank.org/ddh-published/0038598/DR0054337/hzd-mdg-wi.zip
  format: geotiff
  id: MDG
  spatial_resolution: 900
  title: Madagascar - Flood hazard scenarios (tropical cyclones)
- coordinate_system: EPSG:4326
  description: Strong Wind hazard caused by tropical cyclones over Mauritius measured
    as the maximum one-minute sustained wind speed (kph) at 10 meters above the ground
    surface.
  download_url: https://datacatalogfiles.worldbank.org/ddh-published/0038597/DR0054310/hzd-mus-wi.zip
  format: geotiff
  id: MUS
  spatial_resolution: 90
  title: Mauritius - Flood hazard scenarios (tropical cyclones)
- coordinate_system: EPSG:4326
  description: Strong Wind hazard caused by tropical cyclones over Seychelles measured
    as the maximum one-minute sustained wind speed (kph) at 10 meters above the ground
    surface.
  download_url: https://datacatalogfiles.worldbank.org/ddh-published/0038596/DR0054318/hzd-syc-wi.zip
  format: geotiff
  id: SYC
  spatial_resolution: 90
  title: Seychelles - Flood hazard scenarios (tropical cyclones)
- coordinate_system: EPSG:4326
  description: Strong Wind hazard caused by tropical cyclones over Zanzibar measured
    as the maximum one-minute sustained wind speed (kph) at 10 meters above the ground
    surface.
  download_url: https://datacatalogfiles.worldbank.org/ddh-published/0038595/DR0054365/hzd-zan-wi.zip
  format: geotiff
  id: ZAN
  spatial_resolution: 90
  title: Zanzibar - Flood hazard scenarios (tropical cyclones)
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
title: South West Indian Ocean Flood hazard
version: '2017'
vulnerability: null
---
