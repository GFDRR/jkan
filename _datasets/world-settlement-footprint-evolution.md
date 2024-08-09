---
contact_point:
  email: wsf@dlr.de
  name: WSF team
  url: https://geoservice.dlr.de/web/datasets/wsf_2019
creator:
  name: Mattia Marconcini
dataset_id: WSF_evo
description: "The World Settlement Footprint (WSF\xAE) Evolution is a 30m resolution\
  \ dataset outlining the global settlement extent on a yearly basis from 1985 to\
  \ 2015."
details: 'Based on the assumption that settlement growth occurred over time, all pixels
  categorized as non-settlement in the WSF2015 (Marconcini et al., 2020) are excluded
  a priori from the analysis. Next, for each target year in the past, all available
  Landsat-5/7 scenes acquired over the given area of interest are gathered and key
  temporal statistics (i.e., temporal mean, minimum, maximum, etc.) are then extracted
  for different spectral indices. Among others, these include: the normalized difference
  built-up index (NDBI), normalized difference vegetation index (NDVI) and modified
  normalized difference water index (MNDWI). Temporal features proved generally robust
  if computed over at least 7 clear cloud-/cloud-shadow-free observations; accordingly,
  if for a given pixel in the target year this constraint is not satisfied, the time
  frame is enlarged backwards (at 1-year steps) as long as the condition is met.

  Starting backwards from the year 2015 - for which the WSF2015 is used as a reference
  - settlement and non-settlement training samples for the given target year t are
  iteratively extracted by applying morphological filtering to the settlement mask
  derived for the year t+1, as well as excluding potentially mislabeled samples by
  adaptively thresholding the temporal mean NDBI, MNDWI and NDVI. Finally, binary
  Random Forest classification in performed.

  To quantitatively assess the high accuracy and reliability of the dataset, an extensive
  campaign based on crowdsourcing photointerpretation of very high-resolution airborne
  and satellite historical imagery has been performed with the support of Google.
  In particular, for the years 1990, 1995, 2000, 2005, 2010 and 2015, ~200K reference
  cells of 30x30m size distributed over 100 sites around the world have been labelled,
  hence summing up to overall ~1.2M validation samples.

  It is worth noting that past Landsat-5/7 availability considerably varies across
  the world and over time. Independently from the implemented approach, this might
  then result in a lower quality of the final product where few/no scenes have been
  collected. Accordingly, to provide the users with a suitable and intuitive measure
  that accounts for the goodness of the Landsat imagery, we conceived the Input Data
  Consistency (IDC) score, which ranges from 6 to 1 with: 6) very good; 5) good; 4)
  fair; 3) moderate; 2) low; 1) very low. The IDC score is available on a yearly basis
  between 1985 and 2015 and supports a proper interpretation of the WSF evolution
  product.


  The WSF evolution and IDC score datasets are organized in 5138 GeoTIFF files (EPSG4326
  projection) each one referring to a portion of 2 x 2 degree size (~222 x 222 km)
  on the ground. WSF evolution values range between 1985 and 2015 corresponding to
  the estimated year of settlement detection, whereas 0 is no data. A comprehensive
  publication with all technical details and accuracy figures is currently being finalized.
  For the time being, please refer to Marconcini et al,. 2021.'
exposure:
  category: buildings
  dimension: structure
  quantity_kind: area
  taxonomy: null
hazard: null
license: CC-BY-4.0
loss: null
project: "World Settlement Footprint (WSF\xAE)"
publisher:
  name: DLR
  url: https://geoservice.dlr.de/
purpose: null
resources:
- coordinate_system: EPSG:4326
  description: 'Binary mask at 10m resolution outlining the extent of human settlements
    globally derived by means of 2019 multitemporal Sentinel-1 (S1) and Sentinel-2
    (S2) imagery. '
  download_url: https://download.geoservice.dlr.de/WSF_EVO/
  format: geotiff
  id: '0'
  spatial_resolution: 30
  title: World Settlement Footprint (WSF) 2019 - Sentinel-1/2 - Global
risk_data_type:
- exposure
schema: rdl-02
spatial:
  countries:
  - GLO
  scale: global
title: World Settlement Footprint Evolution
version: R2019
vulnerability: null
---
