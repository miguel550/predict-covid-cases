import React, { useEffect, useState } from 'react';
import covidApi from './covid'
import CovidTable from './components/CovidTable'


function App() {
  const [covidCases, setCovidCases] = useState({
    confirmedCases: [],
    recoveredCases: [],
    deathCases: []
  })

  useEffect(() => {
    covidApi.getCases().then(cases => {
      setCovidCases(cases)
    })
  }, [])

  return (
    <CovidTable covidCases={covidCases}/>
  );
}

export default App;
