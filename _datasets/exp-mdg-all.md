---
schema: rdl
title: Madagascar buildings and infrastructure exposure
organization: GFDRR
filename: exp-mdg-all
resources:
  - name: 'Madagascar exposure, all types'
    aggregation_type: Grid
    format:
      - geotiff
    resource_description: Economic value of exposure over 5 occupancy categories aggregated at 1 km.
    h-res: 1 km
    epsg: 4326 (WGS84)
    url: >-
      https://rdl-jkan-datasets.s3-ap-southeast-2.amazonaws.com/exposure/exp-mdg-grd.zip
  - name: 'Madagascar exposure, all types (ADM2 and ADM3)'
    aggregation_type: Administrative boundaries
    format:
      - gpkg
    resource_description: >-
      Economic value of exposure over 5 occupancy categories aggregated at ADM2
      and ADM3 level.
    h-res: ''
    epsg: 4326 (WGS84)
    url: >-
      https://rdl-jkan-datasets.s3-ap-southeast-2.amazonaws.com/exposure/exp-mdg-adm.gpkg
category:
  - Exposure
abstract: >-
  Exposed asset in Madagascar for buildings and infrastructures over five
  occupancy types: residential, commerce, industry, infrastructure and public.
notes: >-
  This data set was produced with financial support from the European Union in
  the framework of the ACP-EU Natural Disaster Risk Reduction Program, managed
  by the Global Facility for Disaster Reduction and Recovery (GFDRR).
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
  Initiative: Final report on risk profiles
biblio_url: >-
  https://rdl-jkan-datasets.s3-ap-southeast-2.amazonaws.com/bibliography/AIR+(2016)+-+SWIO-RAFI+Component+4+-+Risk+profiles.pdf
geo_coverage:
  - MDG
license: 'https://creativecommons.org/licenses/by-sa/4.0/'
maintainer: GFDRR
maintainer_email: contact@riskdatalibrary.org
exposure_category:
  - Buildings
occupancy:
  - Residential, Commerce, Industry, Infrastructure, Public
occupancy_time: ''
taxonomy_source: AIR worldwide
taxonomy_code: ''
event_time_year: ''
add_attributes: ''
val_type:
  - Structure
val_unit: USD
---