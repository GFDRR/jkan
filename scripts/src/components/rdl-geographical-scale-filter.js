import $ from 'jquery'
import {chain, omit, defaults} from 'lodash'

import TmplListGroupItem from '../templates/list-group-item'
import {setContent, slugify, collapseListGroup} from '../util'


function prep_geographical_scale(geographicalScale, params, datasetsForGeographicalScales) {
  const geographicalScaleSlug = slugify(geographicalScale)
  const selected = params.geographicalScale && params.geographicalScale === geographicalScaleSlug
  const itemParams = selected ? omit(params, 'geographicalScale') : defaults({geographicalScale: geographicalScaleSlug}, params)
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

    const geographicalScalesMarkup = consolidated.map(TmplListGroupItem)
    setContent(opts.el, geographicalScalesMarkup)
    collapseListGroup(opts.el)
  }

  _geographicalScalesWithCount (datasets, params) {
    return chain(datasets)
      .groupBy('spatial.scale')
      .flatMap(function (datasetsForGeographicalScales, geographicalScale) {
        var geographicalScales = geographicalScale.split(",")
        var collated = geographicalScales.map(c => prep_geographical_scale(c, params, datasetsForGeographicalScales))

        return collated
      })
      .orderBy('unfilteredCount', 'desc')
      .value()
  }
}
