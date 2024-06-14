/* global settings */
import $ from 'jquery'
import 'jquery-deparam'
import 'bootstrap/js/tab'
import {omit} from 'lodash'

import UserModel from './models/user'
import Navigation from './components/navigation'
import RDLDatasetsList from './components/rdl-datasets-list'
import CategoriesFilter from './components/categories-filter'
import RDLCountryFilter from './components/rdl-country-filter'
import RDLLicenseFilter from './components/rdl-license-filter'
import RDLProjectFilter from './components/rdl-project-filter'
import RDLGeographicalScaleFilter from './components/rdl-geographical-scale-filter'
import DatasetDisplay from './components/dataset-display'
import RDLDatasetDisplay from './components/rdl-datasets-display'
import ViewSwitcher from './components/view-switcher'
import ThemeGallery from './components/theme-gallery'
import {queryByComponent, setParams} from './util'

const params = $.deparam(window.location.search.substr(1))

// Initialize user
const user = new UserModel({
  clientId: params.clientId || settings.GITHUB_CLIENT_ID,
  proxyHost: params.proxyHost || settings.GATEKEEPER_HOST,
  repoOwner: settings.REPO_OWNER,
  repoName: settings.REPO_NAME
})

// If user is mid-login, finish the login process
if (params.code) {
  setParams(omit(params, 'code'))
  user.finishLogin(params.code)
}

// Check for these components on the page and initialize them
const components = [
  {tag: 'navigation', class: Navigation},
  {tag: 'dataset-display', class: DatasetDisplay},
  {tag: 'rdl-dataset-display', class: RDLDatasetDisplay},
  {tag: 'view-switcher', class: ViewSwitcher},
  {tag: 'theme-gallery', class: ThemeGallery},
  {tag: 'rdl-datasets-list', class: RDLDatasetsList, usesDatasets: true},
  {tag: 'categories-filter', class: CategoriesFilter, usesDatasets: true},
  {tag: 'rdl-country-filter', class: RDLCountryFilter, usesDatasets: true},
  {tag: 'rdl-license-filter', class: RDLLicenseFilter, usesDatasets: true},
  {tag: 'rdl-project-filter', class: RDLProjectFilter, usesDatasets: true},
  {tag: 'rdl-geographical-scale-filter', class: RDLGeographicalScaleFilter, usesDatasets: true},
]
for (let component of components) {
  const els = queryByComponent(component.tag)
  if (els.length) {
    // If the component depends on datasets.json, fetch it first (once per page) and pass it
    if (component.usesDatasets) {
      getDatasets().then((datasets) => {
        els.each((index, el) => new component.class({el: $(el), user, params, datasets})) // eslint-disable-line
      })
    // Otherwise simply initialize the component
    } else {
      els.each((index, el) => new component.class({el: $(el), user, params})) // eslint-disable-line
    }
  }
}

// Helper function to ensure datasets.json is only fetched once per page
let datasetsCache
function getDatasets () {
  datasetsCache = datasetsCache || $.getJSON(`${settings.BASE_URL ?? ''}/rdl-datasets.json`)
  return datasetsCache
}
