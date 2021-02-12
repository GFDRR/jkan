export default (data) => (
`<rdl-dataset>
  <h3><a href="${data.url}">${data.title}</a></h3>
  ${data.notes || ''}
  <br/><br/>
  <strong>Developed by (date):</strong> ${data.source} (${data.model_date || 'Date not supplied'})
  <br/>
  <strong>Geo Coverage:</strong> ${data.geo_coverage || 'not supplied'}
  <br />
  <strong>License:</strong> ${data.license}
  <hr>
</rdl-dataset>`
)