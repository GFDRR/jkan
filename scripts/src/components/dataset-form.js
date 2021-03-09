import $ from 'jquery'
import { getJSON } from 'js-cookie'
import 'select2'


function display_rdl_component_fields() {
  var selected = $("#category\\[\\]").val()

  var target = $(`#rdl-schema-${selected.toLowerCase()}`)
  var target_fields = $(`fieldset#rdl-schema-${selected.toLowerCase()}`)
  
  // find fieldsets and input fields
  var fieldsets = $('fieldset[id*="rdl-schema-"]')
  var input_fields = $('fieldset[id*="rdl-schema-"]')

  // hide all rdl fieldsets and disable input fields
  fieldsets.hide()
  $.each(input_fields.find("input, button, select, textarea"), function(index, value) {
    $(value).prop("disabled", true);
  });

  // activate and display only the target fieldset
  $.each(target_fields.find("input, button, select, textarea"), function(index, value) {
    $(value).prop("disabled", false);
  });
  target.show()
}


export default class {
  constructor (opts) {
    const elements = {
      select2: $('.select2', opts.el)
    }

    const schemas = {
      schema: $('#category\\[\\]', opts.el)
    }

    // activate field if already selected (needed for edit page)
    display_rdl_component_fields()

    // add onchange behavior
    schemas.schema.on("change", display_rdl_component_fields)

    // Initialize select2 plugin
    elements.select2.select2()
  }
}
