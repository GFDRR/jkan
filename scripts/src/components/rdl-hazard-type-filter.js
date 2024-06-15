import $ from 'jquery'
import {chain, omit, defaults} from 'lodash'

import TmplListGroupItem from '../templates/list-group-item'
import {setContent, slugify, collapseListGroup} from '../util'


function prep_hazard_type(hazard_type, params, datasetsForHazardType) {
  const hazardTypeSlug = slugify(hazard_type)
  const selected = params.hazard_type && params.hazard_type === hazardTypeSlug
  const itemParams = selected ? omit(params, 'hazard_type') : defaults({hazard_type: hazardTypeSlug}, params)

  return {
    title: hazard_type,
    url: '?' + $.param(itemParams),
    count: datasetsForHazardType.length,
    unfilteredCount: params.length,
    selected: selected
  }
}

export default class {
  constructor (opts) {
    const hazardTypes = this._hazardTypesWithCount(opts.datasets, opts.params)

    const hazardTypesMarkup = hazardTypes.sort((a,b) => {
      // ignore upper and lowercase
      const titleA = a.title.toUpperCase();
      const titleB = b.title.toUpperCase();
      if (titleA < titleB) return -1;
      if (titleA > titleB) return 1;
      return 0;
    }).map(TmplListGroupItem)
    setContent(opts.el, hazardTypesMarkup)
    collapseListGroup(opts.el)
  }

  _hazardTypesWithCount (datasets, params) {
    const exposureDatasets = datasets.filter(d => d.category.includes('Exposure'))
    return chain(datasets)
      .groupBy('hazard_type')
      .flatMap(function (datasetsForHazardType, hazard_type) {
        var hazardTypes = hazard_type.split(",")
        var collated = hazardTypes.map(c => prep_hazard_type(c, params, [...datasetsForHazardType,...exposureDatasets]))

        return collated
      })
      .orderBy('unfilteredCount', 'desc')
      .value()
  }
}
