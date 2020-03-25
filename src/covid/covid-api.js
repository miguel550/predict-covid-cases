export default function makeCovidApi ({ database, makeCovidCase }) {
  return Object.freeze({
    getCasesByCountry,
    getCases
  })

  async function getCasesByCountry() {
    const [confirmedRaw, deathRaw] = await database.fetchData()
    const confirmedCases = confirmedRaw.map(makeCovidCase)
    const deathCases = deathRaw.map(makeCovidCase)
    return {
      confirmedCases,
      deathCases
    }
  }

  async function getCases() {
    const [confirmedRaw, deathRaw] = await database.fetchData()
    const confirmedCases = confirmedRaw.map(makeCovidCase)
    const deathCases = deathRaw.map(makeCovidCase)
    return {
      confirmedCases,
      deathCases
    }
  }
}