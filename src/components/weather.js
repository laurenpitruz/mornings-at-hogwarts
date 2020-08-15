import React from 'react'

// type MainTypes = {
//   feels_like: number,
//   humidity: number,
//   pressure: number,
//   temp: number,
//   temp_max: number,
//   temp_min: number
// }

// type USTypes = {
//   main: MainTypes
// }


// type MarsTypes = {

// }

// type WeatherTypes = {
//   mars: MarsTypes,
//   us: USTypes
// }

// type BaseTypes = {
//   weather: WeatherTypes
// }

export default function Weather (props) {
  const {mars, us} = props.weather
  const marsDay = mars.sol_keys[mars.sol_keys.length-1]
  const d = new Date()
  return (
    <div>
      <p>Updated {d.toString()}</p>
      <h1>{us.name}</h1>
      <p>Coordinates: Longitude: {us.coord.lon} & Latitude: {us.coord.lat}</p>
      <h3>High: {us.main.temp_max} F</h3>
      <h3>Low: {us.main.temp_min} F</h3>
      <br />
      <h1>Mars</h1>
      <p>High: {mars[marsDay].AT.mx} Celcius </p>
      <p>Low: {mars[marsDay].AT.mn} Celcius</p>
      <p></p>
    </div>
  )
}
