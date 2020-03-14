export default function makeCovidCase(covidInfo) {
  // console.log({covidInfo})
  validateInfo(covidInfo)
  const [cov, timeSerie] = normalize(covidInfo)
  return Object.freeze({
    country: cov['Country/Region'],
    province: cov['Province/State'],
    lat: cov['lat'],
    lng: cov['long'],
    timeSerie
  })

  function validateInfo(covidInfoToValidate) {
    try {
      parseFloat(covidInfoToValidate['lat'])
    } catch (e) {
      throw e
    }
    try {
      parseFloat(covidInfoToValidate['long'])
    } catch (e) {
      throw e
    }
  } 

  function normalize(covidInfoToNormalize) {
    let timeSerie = []
    for (const header of Object.keys(covidInfoToNormalize)) {
      const date = new Date(header)
      if(date.toString() === "Invalid Date") {
        continue;
      }
      timeSerie.push({
        date,
        value: parseInt(covidInfoToNormalize[header])
      })
    }
    return [
      {
        ...covidInfoToNormalize,
        lat: parseFloat(covidInfoToNormalize['lat']),
        long: parseFloat(covidInfoToNormalize['long'])
      },
      timeSerie
    ]
  }
}