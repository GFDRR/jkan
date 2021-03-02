import $ from 'jquery'
import {chain, pick, omit, filter, defaults} from 'lodash'

import TmplListGroupItem from '../templates/list-group-item'
import {setContent, slugify, createDatasetFilters, collapseListGroup} from '../util'


function prep_country(country, params, datasetsForCountry) {
  const countrySlug = slugify(country)
  const selected = params.geo_coverage && params.geo_coverage === countrySlug
  const itemParams = selected ? omit(params, 'geo_coverage') : defaults({geo_coverage: countrySlug}, params)
  return {
    title: country,
    url: '?' + $.param(itemParams),
    count: datasetsForCountry.length,
    unfilteredCount: params.length,
    selected: selected
  }
}

export default class {
  constructor (opts) {
    const countries = this._countriesWithCount(opts.datasets, opts.params)

    var consolidated = []
    countries.forEach(function(cv) {
      const idx = consolidated.findIndex(x => x.title === cv.title)
      if (idx == -1) {
        consolidated.push(cv)
      } else {
        consolidated[idx].count += cv.count
        consolidated[idx].unfilteredCount += cv.unfilteredCount
      }
    })

    const countriesMarkup = consolidated.map(TmplListGroupItem)
    setContent(opts.el, countriesMarkup)
    collapseListGroup(opts.el)
  }

  _countriesWithCount (datasets, params) {
    return chain(datasets)
      .groupBy('geo_coverage')
      .flatMap(function (datasetsForCountry, country) {
        var countries = country.split(",")
        var collated = countries.map(c => prep_country(c, params, datasetsForCountry))

        return collated
      })
      .orderBy('unfilteredCount', 'desc')
      .value()
  }
}
