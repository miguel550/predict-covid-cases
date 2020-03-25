import React from 'react'

const Row = (props) => {
  const predict = (timeSerie) => {
    const lastNCases = timeSerie[timeSerie.length - 1].value
    if (timeSerie.length > 1 && timeSerie[timeSerie.length - 2].value > 0) {
      const prevLastNCases = timeSerie[timeSerie.length - 2].value
      const growthFactor = lastNCases/prevLastNCases
      return { value: parseInt(lastNCases*growthFactor), growthFactor: growthFactor.toFixed(2)}
    }
    return { value: timeSerie[timeSerie.length - 1].value, growthFactor: 0.0.toFixed(2)}
  }
  const {country, province, timeSerie, lat, lng} = props.cases
  const {value: prediction, growthFactor} = predict(timeSerie)
  return (
    <tr>
      <td>
        {country}
      </td>
      <td>
        {province}
      </td>
      <td>
        {lat}
      </td>
      <td>
        {lng}
      </td>
      <td>
        {timeSerie[timeSerie.length - 1].value}
      </td>
      <td>
        {prediction}
      </td>
      <td>
        {growthFactor}
      </td>
    </tr>
  )
}
export default (props) => {
  const {confirmedCases} = props.covidCases
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Country</th>
          <th>Province</th>
          <th>lat</th>
          <th>lng</th>
          <th>Counter</th>
          <th>Prediction for today</th>
          <th>Growth Factor</th>
        </tr>
      </thead>
      <tbody>
      {confirmedCases.map(cc => <Row key={cc.country + cc.province} cases={cc}/>)}
      </tbody>
    </table>
  )
}