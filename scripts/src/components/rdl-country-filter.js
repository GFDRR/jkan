import $ from 'jquery'
import {chain, pick, omit, filter, defaults} from 'lodash'

import TmplListGroupItem from '../templates/list-group-item'
import {setContent, slugify, createDatasetFilters, collapseListGroup} from '../util'

export default class {
  constructor (opts) {
    const countries = this._countriesWithCount(opts.datasets, opts.params)
    const countriesMarkup = countries.map(TmplListGroupItem)
    setContent(opts.el, countriesMarkup)
    collapseListGroup(opts.el)
  }

  _countriesWithCount (datasets, params) {
    return chain(datasets)
      .groupBy('geo_coverage')
      .map(function (datasetsForCountry, country) {
        const filters = createDatasetFilters(pick(params, ['geo_coverage']))
        const filteredDatasets = filter(datasetsForCountry, filters)
        const countrySlug = slugify(country)
        const selected = params.geo_coverage && params.geo_coverage === countrySlug
        const itemParams = selected ? omit(params, 'geo_coverage') : defaults({geo_coverage: countrySlug}, params)
        return {
          title: country,
          url: '?' + $.param(itemParams),
          count: datasetsForCountry.length,
          unfilteredCount: datasetsForCountry.length,
          selected: selected
        }
      })
      .orderBy('unfilteredCount', 'desc')
      .value()
  }
}
