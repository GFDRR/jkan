---

schema: 0.1

title:
category:
  - Hazard
  - Exposure
  - Vulnerability
  - Loss
abstract:
organization:
source:
date:
version:
purpose:
project:
notes:
biblio_title:
biblio_url:
geo_coverage:
license:
maintainer:
maintainer_email:

resources:
  - name:
    aggregation_type:
	  - Individual items
      - Aggregated to grid
      - Aggregated to boundaries
      - N/A
	h-res:
	epsg: 
    url: 'https://rdl-jkan-datasets.s3-ap-southeast-2.amazonaws.com/COMPONENT_FOLDER/NAME'
    format:
      - api
      - csv
      - json
      - geojson
      - shapefile
      - geopackage
      - geotiff
      - markdown
	  
[//]: # RDS hazard attributes
rdl_hazard:
[//]: ## EventSet
  - hazard_type:
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
  - analysis_type:
      - Deterministic
      - Probabilistic
  - geo_area:
  - time_start:
  - time_end:
  - time_span:
  - time_year:
[//]: ## Event
  - calculation_method:
      - Inferred
      - Simulated
      - Observed
  - frequency_type:
      - Rate of Exceedence
      - Probability of Exceedence
      - Return Period
  - return_period:
  - occurrence_time_start:
  - occurrence_time_end:
  - occurrence_time_span:
  - trigger_hazard_type:
  - trigger_process_type:
  - description:
[//]: ## FootprintSet
  - process_type:
  - imt:
  - data_uncertainty:
footprintset_data_uncertainty:
[//]: ## Footprint
footprint_uncertainty_2nd_moment:
footprint_trigger_footprint:


[//]: # RDS exposure attributes
rdl_exposure:
[//]: ## Model
  - category:
      - Buildings
      - Indicators
      - Infrastructures
      - Crops, livestock and forestry
  - occupancy:
  - occupancy_time:
      - Night
      - Day
  - taxonomy_source:
  - taxonomy_code:
  - event_time_year:
  - field_name: 
[//]: ## CostType
  - val_type:
      - Structure
      - Content
      - Product
      - Others
  - val_unit:


[//]: # RDS vulnerability attributes
rdl_vulnerability:
[//]: ## Model
  - hazard_type_primary:
  - hazard_type_secondary:
  - process_type_primary:
  - process_type_secondary:
  - frequency_type:
      - Rate of Exceedence
      - Probability of Exceedence
      - Return Period     
  - imt:
  - category:
      - Buildings
      - Indicators
      - Infrastructures
      - Crops, livestock and forestry     
  - occupancy:
  - val_type:
      - Structure
      - Content
      - Product
      - Others
  - val_unit:
  - taxonomy_source:
  - taxonomy_code:
  - impact_type:
      - Direct
      - Indirect
      - Total
  - scale_applicability:
      - Individual items
      - Aggregated to grid
      - Aggregated to boundaries
  - local_applicability:
  - country_transferability:
  - transferability_notes:
  - function_type:
      - Fragility
      - Vulnerability
      - Damage-to-Loss
  - calculation_method:
      - Inferred
      - Simulated
      - Observed
  - approach:
      - Empirical
      - Analytical
      - Judgement
      - Hybrid
  - f_relationship:
      - Mathematical
      - Discrete
  - f_math:
      - Parametric
      - Bespoke
[//]: ## Specifics
  - analysis_details
  - par_names:
  - im_name:
  - im_units:
  - n_events:
  - n_assets:
  - is_fit_good:
  - is_edp_thre:
  - is_dm_factor:
  - is_downtime:

[//]: # LossModel
rdl_loss:
[//]: ## Model
  - hazard_type:
  - process_type:
  - time_start:
  - time_end:
  - time_year:
  - occupancy:
  - category:
      - Buildings
      - Indicators
      - Infrastructures
      - Crops, livestock and forestry     
  - val_type:
      - Structure
      - Content
      - Business interruption
      - Other
  - impact:
      - Direct
      - Indirect
      - Total
  - loss_type:
      - Ground up
      - Insured
  - frequency_type:
      - Rate of Exceedence
      - Probability of Exceedence
      - Return Period     
  - return_period
  - metric:
      - Annual Average Losses
      - Annual Average Loss Ratio
      - Probable Maximal Loss
  - val_unit:
  - hazard_link:
  - exposure_link:
  - vulnerability_link:

---