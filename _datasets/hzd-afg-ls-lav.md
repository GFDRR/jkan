---
schema: rdl
title: Afghanistan Avalanche hazard
organization: GFDRR
filename: hzd-afg-ls-lav
resources:
  - name: Afghanistan Avalanche hazard
    aggregation_type: Grid
    format:
      - geotiff
    h-res: 20 m
    epsg: 32642 (WGS84 UTM42N)
    url: >-
      https://rdl-jkan-datasets.s3-ap-southeast-2.amazonaws.com/hazard/hzd-afg-ls-lav.zip
  - name: Afghanistan Avalanche hazard - 1kPa and 3 kPa
    aggregation_type: Footprints
    format:
      - shp
    h-res: ''
    epsg: 32642 (WGS84 UTM42N)
    url: >-
      https://rdl-jkan-datasets.s3-ap-southeast-2.amazonaws.com/hazard/hzd-afg-ls-lav.gpkg
  - name: Afghanistan Avalanche hazard - Snow Water Equivalents
    aggregation_type: Grid
    format:
      - geotiff
    h-res: 2 km
    epsg: 32642 (WGS84 UTM42N)
    url: >-
      https://rdl-jkan-datasets.s3-ap-southeast-2.amazonaws.com/hazard/hzd-afg-ls-lav-rp100-swe.zip
category:
  - Hazard
abstract: >-
  Avalanche pressure hazard modelled across Afghanistan on a 20 m grid, hazard
  extent for 1kPa and 3kPa, and Snow Water Equivalent for RP 100 years at 2 km
  resolution.
notes: "Snow Water Equivalent (SWE) is computed from EUWATCH data running from 1958 to 2002. The max grid cell values of each hydrological year where the accumulative SWE is taken. Then of the 44 years of modelled data the maximum of the aformentioned maximum values is taken.  Unit is kg/m^2.\r\nOnly the 100 year return period scenario was computed for reasons explained in the report.  "
source: AF-MHRA
model_date: '2016'
version: '1'
purpose: " \tThese maps have been derived on a nation-wide scale for the purpose of identifying high risk- areas on the district and provincial scale, from which decisions can be made on allocating efforts for more detailed site specific hazard and risk analysis. Use of this information on smaller scales should be applied with care. Importantly for on a local scale, it is often the case that more detailed case history and hazard information is required to perform such hazard and risk modelling, particularly where applied to dimension mitigation structures or strategies."
project: Afghanistan Multi-Hazard Risk Assessment (MHRA)
biblio_title: World Bank (2018) - Afghanistan Multi-Hazard Risk Assessment
biblio_url: 'https://www.gfdrr.org/sites/default/files/publication/Afghanistan_MHRA.pdf'
geo_coverage:
  - AFG
license: 'https://creativecommons.org/licenses/by/4.0/'
maintainer: GFDRR
maintainer_email: contact@riskdatalibrary.org
hazard_type:
  - LS
analysis_type: Probabilistic
geo_area: ''
time_start: ''
time_end: ''
time_span: ''
time_year: ''
event_calculation_method: Simulated
frequency_type:
  - Return Period
return_period: RP 100 years
occurrence_time_start: '1958'
occurrence_time_end: '2002'
occurrence_time_span: 44 years
description: ''
process_type:
  - LAV
imt:
  - I_DF_m3/s2
data_uncertainty: ''
---