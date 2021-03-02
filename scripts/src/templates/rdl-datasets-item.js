function license_link(data) {
  if (data.license_display != null) {
    return `<strong>License:</strong> 
    <a property="dct:license" resource="${data.license_display}" href="${data.license}">
      ${data.license_display}
    </a>`
  }

  return `<strong>License:</strong> Unknown or not provided`
}

export default (data) => (
`<rdl-dataset>
  <h3><a href="${data.url}">${data.title}</a></h3>
  ${data.notes || ''}
  <br/><br/>
  <strong>Developed by (date):</strong> ${data.source} (${data.model_date || 'Date not supplied'})
  <br/>
  <strong>Geo Coverage:</strong> ${data.geo_coverage.toString().replace(",", ", ") || 'Not supplied'}
  <br />
  <strong>License:</strong> ${license_link(data)}
  <hr>
</rdl-dataset>`
)
