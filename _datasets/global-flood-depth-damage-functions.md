---
contact_point:
  email: mamadio@worldbank.org
  name: Mattia Amadio
creator:
  name: Huizinga, J.
description: This dataset contains damage curves depicting fractional damage function
  of water depth as well as maximum damage values for a variety of assets and land
  use classes.
details: Based on an extensive literature survey concave damage curves have been developed
  for each continent, while differentiation in flood damage between countries is established
  by determining maximum damage values at the country scale. These maximum damage
  values are based on construction cost surveys from multinational construction companies,
  which provide a coherent set of detailed building cost data across dozens of countries.
  A consistent set of maximum flood damage values for all countries was computed using
  statistical regressions with socio-economic World Development Indicators. Further,
  based on insights from the literature survey, guidance is also given on how the
  damage curves and maximum damage values can be adjusted for specific local circumstances,
  such as urban vs. rural locations or use of specific building material. This dataset
  can be used for consistent supra-national scale flood damage assessments, and guide
  assessment in countries where no damage model is currently available.
exposure: null
hazard: null
id: https://publications.jrc.ec.europa.eu/repository/handle/JRC105688
license: CC-BY-4.0
loss: null
project: null
publisher:
  name: EU Joint Research Centre (JRC)
  url: https://joint-research-centre.ec.europa.eu/index_en
purpose: Assessing potential damage of flood events is an important component in flood
  risk management. Determining direct flood damage is commonly done using depth-damage
  curves, which denote the flood damage that would occur at specific water depths
  per asset or per land-use class. Many countries have developed flood damage models
  using depth-damage curves based on analysis of past flood events and on expert judgement.
  However, the fact that such damage curves are not available for all regions hampers
  damage assessments in some areas. Moreover, due to different methodologies employed
  for various damage models in different countries, damage assessments cannot be directly
  compared with each other, obstructing also supra-national flood damage assessments.
resources:
- coordinate_system: null
  description: 'This spreadsheet contains two components required for flood damage
    assessment: fractional depth-damage functions and maximum damage values. The damage
    functions provide the share of asset that is damaged at a given flood depth, while
    the maximum damage values provide the associated maximum damage value for the
    given asset and, when combined together, they yield the monetary value of the
    damage.'
  download_url: https://publications.jrc.ec.europa.eu/repository/bitstream/JRC105688/copy_of_global_flood_depth-damage_functions__30102017.xlsx
  format: csv
  id: '1'
  spatial_resolution: null
  title: Global flood depth-damage functions database
risk_data_type:
- vulnerability
schema: rdl-02
spatial:
  countries:
  - GLO
  scale: global
title: Global flood depth-damage functions
version: '2.0'
vulnerability:
  approach: hybrid
  base_data_type: inferred
  category: buildings
  dimension: content, structure
  function_type: fragility
  hazard_analysis_type: empirical
  hazard_primary: flood
  hazard_process_primary: fluvial_flood
  hazard_process_secondary: null
  hazard_secondary: null
  impact_unit: percentage
  intensity: fl_wd:m
  metric: mean_damage_ratio
  relationship: ''
  scale: global
  taxonomy: null
  type: direct
  unit: EUR
---
