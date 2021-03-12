import $ from 'jquery'
import {chain, pick, omit, filter, defaults} from 'lodash'

import TmplListGroupItem from '../templates/list-group-item'
import {setContent, slugify, createDatasetFilters, collapseListGroup} from '../util'

export default class {
  constructor (opts) {
    const filetypes = this._filetypesWithCount(opts.datasets, opts.params)
    const filetypesMarkup = filetypes.map(TmplListGroupItem)
    setContent(opts.el, filetypesMarkup)
    collapseListGroup(opts.el)
  }

  // Given an array of datasets, returns an array of their file types with counts
  _filetypesWithCount (datasets, params) {
    return chain(datasets)
      .filter('resources')
      .flatMap(function (value, index, collection) {
        // Explode objects where file type is an array into one object per file type
        if (typeof value.resources === 'string') return value
        const duplicates = []
        const dup_url = []  // keep track of dataset url
        value.resources.forEach(function (resource) {
          if (dup_url.some(x => x == value.url)) {
            // do not add again if this dataset was previously added
            return
          }
          duplicates.push(defaults({resources: resource.format}, value))
          dup_url.push(value.url)
        })
        return duplicates
      })
      .groupBy('resources')
      .map(function (datasetsWithRsrc, resource) {
        const filters = createDatasetFilters(pick(params, ['resources.format']))
        const filteredDatasets = filter(datasetsWithRsrc, filters)
        const resourceSlug = slugify(resource)
        const selected = params.resources && params.resources === resourceSlug
        const itemParams = selected ? omit(params, 'resources') : defaults({resources: resourceSlug}, params)
        return {
          title: resource,
          url: '?' + $.param(itemParams),
          count: filteredDatasets.length,
          unfilteredCount: datasetsWithRsrc.length,
          selected: selected
        }
      })
      .orderBy('unfilteredCount', 'desc')
      .value()
  }
}
