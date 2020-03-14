import makeCovidApi from './covid-api'
import makeCovidCase from './covid-case'
import makeDb from '../db/makeDb'

describe('covid api', () => {
  it('creates api', async () => {
    const database = makeDb()
    const covidApi = makeCovidApi({database, makeCovidCase})
    const a = await covidApi.getCases()
    expect(a).toBeTruthy()
  })
  it('to return cases with time serie', async () => {
    const database = makeDb()
    const covidApi = makeCovidApi({database, makeCovidCase})
    const a = await covidApi.getCases()
    expect(a.confirmedCases.length).toBeGreaterThan(0)
    expect(a.deathCases.length).toBeGreaterThan(0)
    expect(a.recoveredCases.length).toBeGreaterThan(0)
    expect(a.confirmedCases[0].timeSerie.length).toBeGreaterThan(0)
    expect(a.deathCases[0].timeSerie.length).toBeGreaterThan(0)
    expect(a.recoveredCases[0].timeSerie.length).toBeGreaterThan(0)
  })
})

