import $ from 'jquery'
import {chain, omit, defaults} from 'lodash'

import TmplListGroupItem from '../templates/list-group-item'
import {setContent, slugify, collapseListGroup} from '../util'


function prep_license(license, params, datasetsForLicense) {
  const licenseSlug = slugify(license)
  const selected = params.license_display && params.license_display === licenseSlug
  const itemParams = selected ? omit(params, 'license_display') : defaults({license_display: licenseSlug}, params)
  return {
    title: license,
    url: '?' + $.param(itemParams),
    count: datasetsForLicense.length,
    unfilteredCount: params.length,
    selected: selected
  }
}

export default class {
  constructor (opts) {
    const licenses = this._licensesWithCount(opts.datasets, opts.params)
    var consolidated = []
    licenses.forEach(function(l) {
      const idx = consolidated.findIndex(x => x.title === l.title)
      if (idx == -1) {
        consolidated.push(l)
      } else {
        consolidated[idx].count += l.count
        consolidated[idx].unfilteredCount += l.unfilteredCount
      }
    })

    const licensesMarkup = consolidated.sort((a,b) => {
      // ignore upper and lowercase
      const titleA = a.title.toUpperCase();
      const titleB = b.title.toUpperCase();
      if (titleA < titleB) return -1;
      if (titleA > titleB) return 1;
      return 0;
    }).map(TmplListGroupItem)
    setContent(opts.el, licensesMarkup)
    collapseListGroup(opts.el)
  }

  _licensesWithCount (datasets, params) {
    return chain(datasets)
      .groupBy('license_display')
      .flatMap(function (datasetsForLicense, license) {
        var licenses = license.split(",")
        var collated = licenses.map(c => prep_license(c, params, datasetsForLicense))

        return collated
      })
      .orderBy('unfilteredCount', 'desc')
      .value()
  }
}
