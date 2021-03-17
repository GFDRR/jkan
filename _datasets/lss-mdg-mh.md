---
schema: rdl
title: Madagascar Multi-Hazard loss scenarios
organization: GFDRR
filename: lss-mdg-mh
resources:
  - name: Madagascar multi-hazard loss scenarios
    aggregation_type: Administrative boundaries
    format:
      - gpkg
    resource_description: >-
      Dataset includes AAL as well as individual RP loss estimates triggered by
      all assessed hazards combined over different exposure categories at the
      ADM1 and ADM2 levels.
    h-res: ''
    epsg: 4326 (WGS84)
    url: >-
      https://rdl-jkan-datasets.s3-ap-southeast-2.amazonaws.com/loss/lss-mdg-mh.gpkg
  - name: Madagascar multi-hazard loss exceedence-probability curves
    aggregation_type: Administrative boundaries
    format:
      - csv
    resource_description: >-
      Exceedence Probability Curves for disaggregated exposure categories
      showing simulated AAL as well as individual RP loss estimates triggered by
      all assessed hazards combined at the ADM1 and ADM2 levels.
    h-res: ''
    epsg: ''
    url: >-
      https://rdl-jkan-datasets.s3-ap-southeast-2.amazonaws.com/loss/lss-mdg-mh-epc.zip
category:
  - Loss
abstract: >-
  Direct loss simulated on exposed building asset measured as Average Annual
  Losses (AAL) and six Return Period scenarios for multiple hazards (earthquake,
  pluvial flood, storm surge and strong wind).
notes: " \t\r\n\r\nThis data set was produced with financial support from the European Union in the framework of the ACP-EU Natural Disaster Risk Reduction Program, managed by the Global Facility for Disaster Reduction and Recovery (GFDRR)."
source: SWIO-RAFI
model_date: '2016'
version: '1'
purpose: >-
  Quantification of site specific risk of flood, earthquakes, tropical cyclones,
  storm surge and tsunamis, to support improvement in the resiliency and
  capacity of South West Indian Ocean island states through the creation of
  disaster risk financing strategies.
project: >-
  GFDRR South West Indian Ocean Risk Assessment and Financing Initiative
  (SWIO-RAFI)
biblio_title: >-
  World Bank (2017) - Southwest Indian Ocean Risk Assessment and Financing
  Initiative: Summary Report and Risk Profiles
biblio_url: >-
  https://www.gfdrr.org/en/publication/southwest-indian-ocean-risk-assessment-and-financing-initiative-summary-report-and-risk
geo_coverage:
  - MDG
license: 'https://creativecommons.org/licenses/by-sa/4.0/'
maintainer: GFDRR
maintainer_email: contact@riskdatalibrary.org
hazard_type:
  - MH
process_type: ''
time_start: ''
time_end: ''
time_year: ''
occupancy:
  - Mixed
exposure_category:
  - Buildings
val_type:
  - Structure
impact: Direct
loss_type: Ground up
frequency_type:
  - Return Period
return_period: '25, 50, 100, 250, 500, 1000 years'
metric: Annual Average Losses
val_unit: USD
hazard_link: >-
  http://jkan.riskdatalibrary.org/datasets/?category=hazard&geo_coverage=madagascar
exposure_link: 'http://jkan.riskdatalibrary.org/datasets/exp-mdg-all/'
vulnerability_link: ''
---