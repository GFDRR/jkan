import $ from 'jquery'
import {chain, omit, defaults} from 'lodash'

import TmplListGroupItem from '../templates/list-group-item'
import {setContent, slugify, collapseListGroup} from '../util'


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

    const countriesMarkup = consolidated.sort((a,b) => {
      // ignore upper and lowercase
      const titleA = a.title.toUpperCase();
      const titleB = b.title.toUpperCase();
      if (titleA < titleB) return -1;
      if (titleA > titleB) return 1;
      return 0;
    }).map(TmplListGroupItem)
    setContent(opts.el, countriesMarkup)
    collapseListGroup(opts.el)
  }

  _countriesWithCount (datasets, params) {
    const datasetsByCountry = datasets.reduce((result, dataset) => {
      dataset.geo_coverage.forEach(country => {
        if (Array.isArray(result[country])) {
          result[country].push(dataset)
        } else {
          result[country] = [dataset]
        }
      })
      return result;
    }, {})

    return Object.entries(datasetsByCountry).map((datasetsEntryForOneCountry) => {
      const country = datasetsEntryForOneCountry[0];
      const datasetsForOneCountry = datasetsEntryForOneCountry[1];
      return prep_country(country, params, datasetsForOneCountry)
    }, []).sort((a,b) => a.unfilteredCount - b.unfilteredCount)
  }
}
