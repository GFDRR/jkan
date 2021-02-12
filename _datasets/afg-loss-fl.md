---
schema: rdl
title: Afghanistan Flood risk scenarios, current and 2050 (population and asset)
category:
  - Loss
notes: Average Annual Losses (AAL) for current population (AALpop), current asset (AALnowUSD), population SSP scenarios at 2050 (AALpopSP1-5), asset SSP scenarios at 2050 (AAL_usd_SP1-5).
organization: GFDRR
source: disasterrisk.af
model_date: 2018
version: 1
purpose: Quantification of site specific risk of flood, earthquakes, tropical cyclones, storm surge and tsunamis, to support improvement in the resiliency and capacity of South West Indian Ocean island states through the creation of disaster risk financing strategies.
project: GFDRR South West Indian Ocean Risk Assessment and Financing Initiative (SWIO-RAFI)
bibliography: SWIO RAFI Report https://www.gfdrr.org/en/publication/southwest-indian-ocean-risk-assessment-and-financing-initiative-summary-report-and-risk
geo_coverage: MDG
resources:
  - name: Afghanistan all RPs Geopackage
    url: 'https://rdl-jkan-datasets.s3-ap-southeast-2.amazonaws.com/loss/afg-loss-fl.gpkg'
    format: gpkg
  - name: Afghanistan all RPs Shapefile
    url: 'https://rdl-jkan-datasets.s3-ap-southeast-2.amazonaws.com/loss/afg-loss-fl.zip'
    format: shp

license: CC BY 4.0

maintainer: GFDRR
maintainer_email: labs.gfdrr@gmail.com

[//]: # RDL-Loss fields
[//]: ## LossModel
model_name: "Flood Losses"
model_description: "Average Annual Losses at ADM2 level for flood hazard"
model_hazard_type: "FL"
model_process_type: ""
model_hazard_link: ""
model_exposure_link: ""
model_vulnerability_link: ""

[//]: ## LossMap
map_occupancy: "Mixed occupancy"
map_category: "Buildings"
map_element: "Structure"
map_impact: "Direct"
map_loss_type: "Ground up"
map_frequency: "Probability of Exceedence"
map_units: "Population number, USD"
map_metric: "AAL"


---