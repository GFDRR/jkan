---
schema: rdl
title: SWIO-RAFI Madagascar Extra-Tropical Cyclones (Flood) Losses
category:
  - Loss
notes: This data set was produced with financial support from the European Union in the framework of the ACP-EU Natural Disaster Risk Reduction Program, managed by the Global Facility for Disaster Reduction and Recovery (GFDRR).
organization: GFDRR
source: AIR Worldwide
model_date: 2016
version: 1
purpose: Quantification of site specific risk of flood, earthquakes, tropical cyclones, storm surge and tsunamis, to support improvement in the resiliency and capacity of South West Indian Ocean island states through the creation of disaster risk financing strategies.
project: GFDRR South West Indian Ocean Risk Assessment and Financing Initiative (SWIO-RAFI)
bibliography: SWIO RAFI Report https://www.gfdrr.org/en/publication/southwest-indian-ocean-risk-assessment-and-financing-initiative-summary-report-and-risk
geo_coverage: MDG
resources:
  - name: Madagascar AAL and RPs losses from Extra-Tropical Cyclones
    url: 'https://rdl-jkan-datasets.s3-ap-southeast-2.amazonaws.com/loss/mdg-loss-etc.zip'
    format: shp

license: 'https://creativecommons.org/licenses/by-sa/4.0/'

maintainer: GFDRR
maintainer_email: labs.gfdrr@gmail.com

[//]: # RDL-Loss fields
[//]: ## LossModel
model_name: "Flood losses from Extra-Tropical Cyclones"
model_description: "Average Annual Losses and RP losses at ADM2 level for all hazards combined"
model_hazard_type: "FL"
model_process_type: "ETC"
model_hazard_link: ""
model_exposure_link: ""
model_vulnerability_link: ""

[//]: ## LossMap
map_occupancy: "Residential"
map_category: "Buildings"
map_element: "Structure"
map_impact: "Direct"
map_loss_type: "Ground up"
map_frequency: "Return Period"
map_return_period: "10, 25, 50, 100, 250, 500, 1000"
map_units: "USD"
map_metric: "AAL"


---