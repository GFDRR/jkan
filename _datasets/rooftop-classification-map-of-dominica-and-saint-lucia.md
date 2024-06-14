---
contact_point:
  email: tisabelle@worldbank.org
  name: Isabelle Tingzon
  url: https://issa-tingzon.github.io/
creator:
  email: tisabelle@worldbank.org
  name: Isabelle Tingzon
  url: https://issa-tingzon.github.io/
dataset_id: ortho_OECS
description: Building footprint polygons in Dominica and Saint Lucia with corresponding
  roof type and roof material attributes predicted from RGB orthophotos taken in 2018-2019,
  in the aftermath of Hurricane Maria.
details: 'The vector dataset depicts building footprint polygons of Dominica with
  corresponding roof type and roof material attributes. The categories for roof type
  are FLAT, GABLE, HIP, and NO ROOF, and the categories for roof material are HEALTHY
  METAL, IRREGULAR METAL, CONCRETE/CEMENT, BLUE TARPAULIN, and INCOMPLETE. The roof
  classification map was derived using a convolutional neural network (CNN) model
  trained on ~15,000 labels across Dominica and Saint Lucia. The roof type and roof
  classification maps were predicted from nationwide very high-resolution RGB orthophotos
  with a spatial resolution of 20 cm/px taken in 2018-2019, in the aftermath of Hurricane
  Maria in 2017. The dataset also contains the predicted probabilities per category,
  suffixed by \"_PROB\". '
exposure:
  category: buildings
  dimension: structure
  quantity_kind: area
  taxonomy: Custom
hazard: null
license: CC-BY-4.0
loss: null
project: Digital Earth for Resilient Housing and Infrastructure in the Caribbean
publisher:
  email: tisabelle@worldbank.org
  name: GFDRR
purpose: null
resources:
- coordinate_system: EPSG:32620
  description: Building footprint polygons of Dominica with corresponding roof type
    and roof material attributes predicted from RGB orthophotos taken in 2018-2019,
    in the aftermath of Hurricane Maria.
  download_url: https://drive.google.com/file/d/15_JAPZlxHaRw9ldMqYcwEC2xAlDmVD23/view?usp=drive_link
  format: gpkg
  id: '0'
  spatial_resolution: null
  title: Dominica Rooftop Classification Map
- coordinate_system: EPSG:32620
  description: Building footprint polygons of Saint Lucia with corresponding roof
    type and roof material attributes predicted from RGB orthophotos taken in 2022.
  download_url: https://drive.google.com/file/d/1VjaGp_Hhh7urqJsWU3QxYHirqQzReT8y/view?usp=drive_link
  format: gpkg
  id: '1'
  spatial_resolution: null
  title: Saint Lucia Rooftop Classification Map
- coordinate_system: null
  description: Accurate and up-to-date information on building characteristics is
    essential for vulnerability assessment; however, the high costs and long timeframes
    associated with conducting traditional field surveys can be an obstacle to obtaining
    critical exposure datasets needed for disaster risk management. In this work,
    we leverage deep learning techniques for the automated classification of roof
    characteristics from very high-resolution orthophotos and airborne LiDAR data
    obtained in Dominica following Hurricane Maria in 2017. We demonstrate that the
    fusion of multimodal earth observation data performs better than using any single
    data source alone. Using our proposed methods, we achieve F1 scores of 0.93 and
    0.92 for roof type and roof material classification, respectively. This work is
    intended to help governments produce more timely building information to improve
    resilience and disaster response in the Caribbean.
  download_url: https://arxiv.org/abs/2307.16177
  format: pdf
  id: '2'
  spatial_resolution: null
  title: Fusing VHR Post-disaster Aerial Imagery and LiDAR Data for Roof Classification
    in the Caribbean
risk_data_type:
- exposure
schema: rdl-02
spatial:
  countries:
  - DOM
  - LCA
  scale: national
title: Rooftop classification map of Dominica and Saint Lucia
version: '1.0'
vulnerability: null
---
