import makeDb from '../db/makeDb'
import makeCovidApi from './covid-api'
import makeCovidCase from './covid-case'


const database = makeDb()

export default makeCovidApi({database, makeCovidCase})