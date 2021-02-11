export default (data) => (
`<rdl-dataset>
  <h3><a href="${data.url}">${data.title}</a></h3>
  Description: ${data.notes || ''}
  <br/>
  Developed by (date): ${data.source} (${data.model_date || 'Date not supplied'})
  <br/>
  Geo Coverage: ${data.geo_coverage || 'not supplied'}
  <br />
  License: ${data.license}
</rdl-dataset>`
)