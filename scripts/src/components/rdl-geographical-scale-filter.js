import $ from 'jquery'
import {chain, omit, defaults} from 'lodash'

import TmplListGroupItem from '../templates/list-group-item'
import {setContent, slugify, collapseListGroup} from '../util'

const ORDER = [
  'Global',
  'Regional',
  'National',
  'Sub-national',
]

function prep_geographical_scale(geographicalScale, params, datasetsForGeographicalScales) {
  const geographicalScaleSlug = slugify(geographicalScale)
  const selected = params.geo_scale && params.geo_scale === geographicalScaleSlug
  const itemParams = selected ? omit(params, 'geo_scale') : defaults({geo_scale: geographicalScaleSlug}, params)
  return {
    title: geographicalScale,
    url: '?' + $.param(itemParams),
    count: datasetsForGeographicalScales.length,
    unfilteredCount: params.length,
    selected: selected
  }
}

export default class {
  constructor (opts) {
    const geographicalScales = this._geographicalScalesWithCount(opts.datasets, opts.params)
    var consolidated = []
    geographicalScales.forEach(function(gs) {
      const idx = consolidated.findIndex(x => x.title === gs.title)
      if (idx == -1) {
        consolidated.push(gs)
      } else {
        consolidated[idx].count += gs.count
        consolidated[idx].unfilteredCount += gs.unfilteredCount
      }
    })

    const geographicalScalesMarkup = consolidated.sort((a,b) => {
      const aIndex = ORDER.findIndex((title) => title === a.title);
      const bIndex = ORDER.findIndex((title) => title === b.title);
      return aIndex - bIndex;
    }).map(TmplListGroupItem)
    setContent(opts.el, geographicalScalesMarkup)
    collapseListGroup(opts.el)
  }

  _geographicalScalesWithCount (datasets, params) {
    return chain(datasets)
      .groupBy('geo_scale')
      .flatMap(function (datasetsForGeographicalScales, geographicalScale) {
        var geographicalScales = geographicalScale.split(",")
        var collated = geographicalScales.map(c => prep_geographical_scale(c, params, datasetsForGeographicalScales))

        return collated
      })
      .orderBy('unfilteredCount', 'desc')
      .value()
  }
}
