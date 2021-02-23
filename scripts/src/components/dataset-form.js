import $ from 'jquery'
import { getJSON } from 'js-cookie'
import 'select2'


function display_rdl_component_fields() {
  var selected = $("#category\\[\\]").val()

  var target = $(`#rdl-schema-${selected.toLowerCase()}`)

  var fieldsets = $('fieldset[id*="rdl-schema-"]')
  fieldsets.hide()  //hide all rdl fieldsets
  fieldsets.children().prop('disabled', true)  // disable form fields

  target.children().prop('disabled', false)
  target.show()  // display only the target fieldset
}


export default class {
  constructor (opts) {
    const elements = {
      select2: $('.select2', opts.el)
    }

    const schemas = {
      schema: $('#category\\[\\]', opts.el)
    }

    // add onchange behavior
    schemas.schema.on("change", display_rdl_component_fields)

    // Initialize select2 plugin
    elements.select2.select2()
  }
}
