---
contact_point:
  email: paola.ceresa@redrisk.com
  name: Paola Ceresa
creator:
  name: Paolo Bazzuro
dataset_id: CA_SFRARR_EQ_loss
description: 'Seismic risk estimates, including return period loss estimates, annual
  average loss estimates and event loss tables '
details: null
exposure: null
hazard: null
license: CC-BY-SA-4.0
loss:
  approach: analytical
  base_data_type: simulated
  category: agriculture, buildings, infrastructure, population
  description: Estimated economic loss per sector and for all sectors combined for
    seismic risk aggregated to the Oblast, national and regional level, Estimated
    fatalities due to seismic risk, aggregated to the Oblast, national and regional
    level
  dimension: product, structure
  exposure_id: CA_SFRARR_exp
  hazard_analysis_type: probabilistic
  hazard_id: CA_SFRARR_EQ
  hazard_process: ground_motion
  hazard_type: earthquake
  impact_metric: casualty_count, economic_loss_value
  impact_type: direct
  impact_unit: count
  type: ground_up
  vulnerability_id: CA_SFRARR_EQ_vuln
project: SFRARR - Strengthening Financial Resilience and Accelerating Risk Reduction in Central Asia
publisher:
  name: RED - Risk, Engineering  Development - Pavia (Italy)
  url: https://www.redrisk.com
purpose: Regional risk modelling. These data have been derived on a regional scale
  for the purpose of consistent regional multi-country hazard and risk assessment.
  Application of this information on smaller scales should be done with care. Importantly
  on a local scale, it is often the case that more detailed history and hazard information
  is required to perform such hazard and risk modelling, particularly were applied
  to dimension mitigation structures or strategies.
resources:
- coordinate_system: null
  description: Tabulated return period loss estimates showing seismic risk at ADM1,
    country and regional level. One csv file per loss breakdown, giving the estimated
    loss per return period.
  download_url: https://datacatalogfiles.worldbank.org/ddh-published/0064273/DR0092053/SFRARR_EQ_RPsummaries_Economic_current.zip?versionId=2023-07-21T17:05:43.1885433Z
  format: csv
  id: CA_SFRARR_EQ_loss_RP
  spatial_resolution: null
  title: Central Asia seismic risk return period summaries - economic loss - current
- coordinate_system: null
  description: Tabulated return period loss estimates showing seismic risk at ADM1,
    country and regional level. One csv file per loss breakdown, giving the estimated
    loss per return period.
  download_url: https://datacatalogfiles.worldbank.org/ddh-published/0064273/DR0092055/SFRARR_EQ_RPsummaries_PopFatalities_current.zip?versionId=2023-07-21T17:05:47.0413599Z
  format: csv
  id: CA_SFRARR_EQ_fatalities_RP
  spatial_resolution: null
  title: Central Asia seismic risk return period summaries - population - current
- coordinate_system: null
  description: Exceedance Probability (EP) loss curves showing the estimated severity
    and frequency of earthquake losses (monetary loss and human fatalities). This
    dataset includes risk estimates for the whole Central Asian region, each country
    in the study, and each Oblast. Risk estimates are available for multiple sectors/asset
    types individually, and all sectors combined. Asset types comprise residential,
    commercial, education, and healthcare buildings, roads, bridges. Risk estimates
    are provided for current exposure, and residential only and fatalities projected
    using SSP1, SSP4 and SSP5. Estimated economic losses for each sector and all sectors
    combined using current exposure. Losses are aggregated at regional, national and
    Oblast levels in one csv file per ADM unit and sector giving the estimated loss
    per selected exceedance probability (return period).
  download_url: https://datacatalog.worldbank.org/search/dataset/0064271
  format: csv
  id: CA_SFRARR_EQ_loss_EP
  spatial_resolution: null
  title: Central Asia seismic risk EP curves
- coordinate_system: null
  description: 'Event Loss Tables (ELTs) showing the severity and frequency of estimated
    loss for each simulated earthquake event. Event Loss Tables (ELTs) provide the
    estimated economic loss per simulated event. The ELT is used to develop the EP
    curves, AAL and return period loss estimates. An ELT is provided for losses aggregated
    to regional, national and Oblast levels, for each sector sector and all sectors
    combined using current exposure. One csv file per loss breakdown, giving the estimated
    loss per event. '
  download_url: https://datacatalog.worldbank.org/search/dataset/0064272
  format: csv
  id: CA_SFRARR_EQ_ELTs
  spatial_resolution: null
  title: Central Asia seismic risk - Event Loss Tables (ELTs)
- coordinate_system: null
  description: Geospatial data layer describing estimated return period losses, Annual
    aggregate and probable maximum losses at Oblast level per country per sectors,
    current and projected exposure
  download_url: https://datacatalog.worldbank.org/search/dataset/0064275
  format: shp
  id: CA_SFRARR_EQ_RP_maps
  spatial_resolution: null
  title: Central Asia seismic risk AAL and Return Period Loss maps
- coordinate_system: null
  description: 'Tabulated summary of simulated fatalities and economic loss due to
    five hypothetical 1-in-100-year earthquake events impacting Almaty, Bishkek, Tashkent,
    Ashgabat, and Dushanbe. EQ-Scenario Losses-Deterministic Analysis.csv: Table showing
    the estimated fatalities, economic loss (million USD) and event parameters due
    to each simulated scenario.'
  download_url: https://datacatalog.worldbank.org/search/dataset/0064276
  format: csv
  id: CA_SFRARR_EQ_scenarioLosses
  spatial_resolution: null
  title: Central Asia seismic risk scenario losses
- coordinate_system: null
  description: 'Tabulated summary of seismic hazard intensity for selected infrastructure:
    airports, industrial sites, infratructure, population and transport. Developed
    as part of the Strengthening Financial Resilience and Accelerating Risk Reduction
    in Central Asia program. (https://www.gfdrr.org/en/program/SFRARR-Central-Asia).
    Number of assets exposed to each maximum seismic ground shaking (pga) class for
    each return period.'
  download_url: https://datacatalog.worldbank.org/search/dataset/0064274
  format: csv
  id: CA_SFRARR_EQ_hazardIntensity
  spatial_resolution: null
  title: Central Asia seismic risk hazard intensity summaries
risk_data_type:
- loss
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
title: Central Asia seismic risk estimates
version: '2022'
vulnerability: null
---
