---
[//]: # RDL-attributes for JKAN
[//]: ## Contribution attributes and link to file
schema: rdl
title:
category: Loss
notes:
organization:
source: SWIO RAFI
model_date:
version:
purpose:
project:
bibliography:
geo_coverage:
  - ABW
  - AFG
  - AGO
  - AIA
  - ALB
  - AND
  - ARE
  - ARG
  - ARM
  - ASM
  - ATG
  - AUS
  - AUT
  - AZE
  - BDI
  - BEL
  - BEN
  - BFA
  - BGD
  - BGR
  - BHR
  - BHS
  - BIH
  - BLM
  - BLR
  - BLZ
  - BMU
  - BOL
  - BRA
  - BRB
  - BRN
  - BTN
  - BWA
  - CAF
  - CAN
  - CHE
  - CHL
  - CHN
  - CIV
  - CMR
  - COD
  - COG
  - COK
  - COL
  - COM
  - CPV
  - CRI
  - CUB
  - CUW
  - CYM
  - CYP
  - CZE
  - DEU
  - DJI
  - DMA
  - DNK
  - DOM
  - DZA
  - ECU
  - EGY
  - ERI
  - ESP
  - EST
  - ETH
  - FIN
  - FJI
  - FLK
  - FRA
  - FRO
  - FSM
  - GAB
  - GBR
  - GEO
  - GGY
  - GHA
  - GIB
  - GIN
  - GMB
  - GNB
  - GNQ
  - GRC
  - GRD
  - GRL
  - GTM
  - GUM
  - GUY
  - HKG
  - HMD
  - HND
  - HRV
  - HTI
  - HUN
  - IDN
  - IMN
  - IND
  - IRL
  - IRN
  - IRQ
  - ISL
  - ISR
  - ITA
  - JAM
  - JEY
  - JOR
  - JPN
  - KAZ
  - KEN
  - KGZ
  - KHM
  - KIR
  - KNA
  - KOR
  - KWT
  - LAO
  - LBN
  - LBR
  - LBY
  - LCA
  - LIE
  - LKA
  - LSO
  - LTU
  - LUX
  - LVA
  - MAC
  - MAF
  - MAR
  - MCO
  - MDA
  - MDG
  - MDV
  - MEX
  - MHL
  - MKD
  - MLI
  - MLT
  - MMR
  - MNE
  - MNG
  - MNP
  - MOZ
  - MRT
  - MSR
  - MUS
  - MWI
  - MYS
  - NAM
  - NCL
  - NER
  - NFK
  - NGA
  - NIC
  - NIU
  - NLD
  - NOR
  - NPL
  - NRU
  - NZL
  - OMN
  - PAK
  - PAN
  - PCN
  - PER
  - PHL
  - PLW
  - PNG
  - POL
  - PRI
  - PRK
  - PRT
  - PRY
  - PSE
  - PYF
  - QAT
  - ROU
  - RUS
  - RWA
  - SAU
  - SDN
  - SEN
  - SGP
  - SGS
  - SHN
  - SLB
  - SLE
  - SLV
  - SMR
  - SOM
  - SPM
  - SRB
  - SSD
  - STP
  - SUR
  - SVK
  - SVN
  - SWE
  - SWZ
  - SXM
  - SYC
  - SYR
  - TCA
  - TCD
  - TGO
  - THA
  - TJK
  - TKM
  - TLS
  - TON
  - TTO
  - TUN
  - TUR
  - TUV
  - TZA
  - UGA
  - UKR
  - URY
  - USA
  - UZB
  - VAT
  - VCT
  - VEN
  - VGB
  - VIR
  - VNM
  - VUT
  - WLF
  - WSM
  - XXK
  - YEM
  - ZAF
  - ZMB
  - ZWE 

resources:
  - name: package name and format
    url: 'https://rdl-jkan-datasets.s3-ap-southeast-2.amazonaws.com/COMP/NAME'
    format: gpkg
  - name: Afghanistan all RPs Shapefile
    url: 'https://rdl-jkan-datasets.s3-ap-southeast-2.amazonaws.com/COMP/NAME'
    format: shp

license:
  - CC0
  - CC BY 4.0
  - CC BY-SA 4.0
  - ODbl
  - ODC-By
  - PDDL

maintainer:
maintainer_email:

[//]: # RDL-Loss fields
[//]: ## LossModel
model_name:
model_description:
model_hazard_type:
  - CF
  - CS
  - DR
  - EQ
  - ET
  - FL
  - LS 
  - MH
  - TS
  - VO
  - WF
  - WI
model_process_type:
  - FCF
  - FSS
  - TOR
  - DTA
  - DTH
  - DTM
  - DTS
  - Q1R
  - Q2R
  - QGM
  - QLI
  - ECD
  - EHT
  - FFF
  - FPF
  - LAV
  - LSL
  - TSI
  - VAF
  - VBL
  - VFH
  - VLH
  - VLV
  - VPF
  - WFI
  - ETC
  - TCY
model_hazard_link:
model_exposure_link:
model_vulnerability_link:
  
[//]: ## LossMap
map_occupancy:
  - Residential
  - Commercial
  - Industrial
  - Infrastructure
  - Healthcare
  - Educational
  - Government
  - Crop
  - Livestock
  - Forestry
  - Mixed
map_category:
  - Buildings
  - Indicators
  - Infrastructures
  - Crops, livestock and forestry   
map_element:
  - Structure
  - Content
  - Business interruption
  - Other
map_impact:
  - Direct
  - Indirect
  - Mixed
map_loss_type:
  - Ground up
  - Insured
map_frequency:
  - Rate of Exceedence
  - Probability of Exceedence
  - Return Period   
map_return_period:
map_units:
map_metric:
  - AAL
  - AALR
  - PML
  
[//]: ## CurveMap
curve_map_occupancy:
  - Residential
  - Commercial
  - Industrial
  - Infrastructure
  - Healthcare
  - Educational
  - Government
  - Crop
  - Livestock
  - Forestry
  - Mixed
curve_map_category:
  - Buildings
  - Indicators
  - Infrastructures
  - Crops, livestock and forestry   
curve_map_element:
  - Structure
  - Content
  - Business interruption
  - Other
curve_map_impact:
  - Direct
  - Indirect
  - Mixed
curve_map_loss_type:
  - Ground up
  - Insured
curve_map_frequency:
curve_map_investigation_time:
curve_map_units:

---
