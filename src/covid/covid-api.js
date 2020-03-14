export default function makeCovidApi ({ database, makeCovidCase }) {
  return Object.freeze({
    getCasesByCountry,
    getCases
  })

  async function getCasesByCountry() {
    const [confirmedRaw, recoveredRaw, deathRaw] = await database.fetchData()
    const confirmedCases = confirmedRaw.map(makeCovidCase)
    const recoveredCases = recoveredRaw.map(makeCovidCase)
    const deathCases = deathRaw.map(makeCovidCase)
    return {
      confirmedCases,
      recoveredCases,
      deathCases
    }
  }

  async function getCases() {
    const [confirmedRaw, recoveredRaw, deathRaw] = await database.fetchData()
    const confirmedCases = confirmedRaw.map(makeCovidCase)
    const recoveredCases = recoveredRaw.map(makeCovidCase)
    const deathCases = deathRaw.map(makeCovidCase)
    return {
      confirmedCases,
      recoveredCases,
      deathCases
    }
  }
}