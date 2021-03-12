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
        // if (typeof value.resources === 'string') return value
        const duplicates = []
        const dup_url = []  // keep track of dataset url
        value.resources.forEach(function (resource) {
          var rsrc_fmt = resource.format

          // Only use first item if list detected
          // (shouldn't be a list though)
          if (Array.isArray(resource.format)) {
            rsrc_fmt = resource.format[0]
          }

          if (dup_url.some(x => x == value.url+rsrc_fmt)) {
            // do not add again if this dataset was previously added
            // store combination of url and resource format
            return
          }
          duplicates.push(defaults({resources: rsrc_fmt}, value))
          dup_url.push(value.url+rsrc_fmt)
        })
        
        return duplicates
      })
      .groupBy('resources')
      .map(function (datasetsWithRsrc, resource) {
        const resourceSlug = slugify(resource)
        const selected = params.resources && params.resources === resourceSlug
        const itemParams = selected ? omit(params, 'resources') : defaults({resources: resourceSlug}, params)

        return {
          title: resource,
          url: '?' + $.param(itemParams),
          count: datasetsWithRsrc.length,
          unfilteredCount: datasetsWithRsrc.length,
          selected: selected
        }
      })
      .orderBy('unfilteredCount', 'desc')
      .value()
  }
}
