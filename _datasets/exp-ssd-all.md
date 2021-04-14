---
schema: rdl
title: South Sudan buildings and infrastructures
organization: GFDRR
filename: exp-ssd-all
resources:
  - name: 'South Sudan buildings, land use and roads'
    aggregation_type: Footprints
    format:
      - gpkg
    resource_description: 'Buildings, land use, and roads polygons from OpenStreetMap'
    h-res: ''
    epsg: 4326 (WGS84)
    url: >-
      https://rdl-jkan-datasets.s3-ap-southeast-2.amazonaws.com/exposure/exp-ssd-osm.gpkg
  - name: South Sudan settlements
    aggregation_type: Points or lines
    format:
      - gpkg
    resource_description: Location and ranking of settlements from OCHA (2019)
    h-res: ''
    epsg: 4326 (WGS84)
    url: >-
      https://rdl-jkan-datasets.s3-ap-southeast-2.amazonaws.com/exposure/exp-ssd-settlements_ocha.gpkg
  - name: South Sudan health facilities
    aggregation_type: Points or lines
    format:
      - gpkg
    resource_description: Location and ranking of health facilities from World Bank (2009)
    h-res: ''
    epsg: 4326 (WGS84)
    url: >-
      https://rdl-jkan-datasets.s3-ap-southeast-2.amazonaws.com/exposure/exp-ssd-health_wb.gpkg
category:
  - Exposure
abstract: >-
  Exposure data representing location and type of settlments, land use,
  buildings, health facilities and roads from a combination of sources: Open
  Street Map, OCHA and World Bank.
notes: ''
source: OSM, OCHA, WB
model_date: '2018'
version: ''
purpose: >-
  The results of the analysis contribute to the production of knowledge for
  disaster risk management (DRM) to support the World Bank’s operational teams
  in their in-country engagements. Specifcally, the key fndings of this study 
  allow to rank South Sudan states in terms of natural disasters risk, and to
  identify the most critical components for each area. The output of this
  assessment includes a geodatabase which contains both the key primary data and
  all the resulting maps produced by the analysis, allowing risk analysts and
  managers to explore them in detail using GIS software.
project: 'Disasters, conflict, and displacement: Intersectional risks in South Sudan'
biblio_title: >-
  World Bank (2020) - Disasters, conflict, and displacement: Intersectional
  risks in South Sudan
biblio_url: 'https://www.preventionweb.net/publications/view/73878'
geo_coverage:
  - SSD
license: 'https://creativecommons.org/licenses/by/4.0/'
maintainer: GFDRR
maintainer_email: contact@riskdatalibrary.org
exposure_category: Buildings, Infrastructures
occupancy:
  - Mixed
occupancy_time: ''
taxonomy_source: ''
taxonomy_code: ''
event_time_year: ''
add_attributes: ''
val_type:
  - Structure
val_unit: None
---