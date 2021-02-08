import $ from 'jquery'
import {chain, pick, omit, filter, defaults} from 'lodash'

import TmplListGroupItem from '../templates/list-group-item'
import {setContent, slugify, createDatasetFilters, collapseListGroup} from '../util'

export default class {
  constructor (opts) {
    const sources = this._sourcesWithCount(opts.datasets, opts.params)
    const sourcesMarkup = sources.map(TmplListGroupItem)
    setContent(opts.el, sourcesMarkup)
    collapseListGroup(opts.el)
  }

  _sourcesWithCount (datasets, params) {
    return chain(datasets)
      .groupBy('sources')
      .map(function (datasetsInSrc, src) {
        const filters = createDatasetFilters(pick(params, ['category']))
        const filteredDatasets = filter(datasetsInSrc, filters)
        const orgSlug = slugify(src)
        const selected = params.src && params.src === orgSlug
        const itemParams = selected ? omit(params, 'source') : defaults({src: orgSlug}, params)
        return {
          title: src,
          url: '?' + $.param(itemParams),
          count: filteredDatasets.length,
          unfilteredCount: datasetsInSrc.length,
          selected: selected
        }
      })
      .orderBy('unfilteredCount', 'desc')
      .value()
  }
}
