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
      .groupBy('source')
      .map(function (datasetsInSrc, src) {
        const filters = createDatasetFilters(pick(params, ['category']))
        const filteredDatasets = filter(datasetsInSrc, filters)
        const srcSlug = slugify(src)
        const selected = params.source && params.source === srcSlug
        const itemParams = selected ? omit(params, 'source') : defaults({source: srcSlug}, params)
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
