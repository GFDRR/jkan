import $ from 'jquery'
import {chain, omit, defaults} from 'lodash'

import TmplListGroupItem from '../templates/list-group-item'
import {setContent, slugify, collapseListGroup} from '../util'


function prep_project(project, params, datasetsForProject) {
  const projectSlug = slugify(project)
  const selected = params.project && params.project === projectSlug
  const itemParams = selected ? omit(params, 'project') : defaults({project: projectSlug}, params)
  return {
    title: project,
    url: '?' + $.param(itemParams),
    count: datasetsForProject.length,
    unfilteredCount: params.length,
    selected: selected
  }
}

export default class {
  constructor (opts) {
    const projects = this._projectsWithCount(opts.datasets, opts.params)
    var consolidated = []
    projects.forEach(function(l) {
      const idx = consolidated.findIndex(x => x.title === l.title)
      if (idx == -1) {
        consolidated.push(l)
      } else {
        consolidated[idx].count += l.count
        consolidated[idx].unfilteredCount += l.unfilteredCount
      }
    })

    const projectsMarkup = consolidated.sort((a,b) => {
      // ignore upper and lowercase
      const titleA = a.title.toUpperCase();
      const titleB = b.title.toUpperCase();
      if (titleA < titleB) return -1;
      if (titleA > titleB) return 1;
      return 0;
    }).map(TmplListGroupItem)
    setContent(opts.el, projectsMarkup)
    collapseListGroup(opts.el)
  }

  _projectsWithCount (datasets, params) {
    return chain(datasets)
      .groupBy('project')
      .flatMap(function (datasetsForProject, project) {
        var projects = project.split(",")
        var collated = projects.map(c => prep_project(c, params, datasetsForProject))

        return collated
      })
      .orderBy('unfilteredCount', 'desc')
      .value()
  }
}
