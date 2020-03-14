import parseCsv from '../helpers/parseCsv'

export default function makeDb () {
  let cache = []
  return Object.freeze({
    fetchData
  })

  async function fetchData() {
    if (cache.length > 0) {
      return Promise.resolve(cache)
    }
    const sheets = ["Confirmed", "Recovered", "Deaths"]
    const sheetsValues = sheets.map(async sheetName => {
      let d = await fetch (`https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-${sheetName}.csv`)
      d = await d.text()
      d = await parseCsv(d)
      return d
    })
    return Promise.all(sheetsValues).then(values => {
      cache = values;
      return values
    })
  }
}