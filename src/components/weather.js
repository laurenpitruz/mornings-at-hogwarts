import React, { Fragment } from 'react'
import { gql, useQuery } from '@apollo/client';


const GET_WEATHER = gql`
  query GetWeather($zip: String!) {
    weather(zip: $zip) {
      cityName
      sunrise
    }
  }
`

export default function Weather ({ zip }) {
  const { data, loading, error } = useQuery(GET_WEATHER, {
    variables: { zip }
  })

  return (
    <Fragment>
      <h1>Weather</h1>
      <p>City: {data && data.weather.cityName}</p>
      <br/>
      <p>Sunrise: {data && data.weather.sunrise}</p>
    </Fragment>
  )
}

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

// const WeatherPage = () => {
//   const [zip, setZip] = useState('10003')
//   const [weather, setWeather] = useState()

//   useEffect(() => {
//     const getWeather = async () => {
//       const us = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=94040,us&units=imperial&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`)

//       const mars = await axios.get(`https://api.nasa.gov/insight_weather/?api_key=${process.env.REACT_APP_NASA_API_KEY}&feedtype=json&ver=1.0`)
//       setWeather({mars: mars.data, us: us.data})
//     }

//     getWeather()
//   }, [zip])
//   return (
//     <div>
//       {weather && <Weather weather={weather} />}
//     </div>
//   )
// }

// export default function Weather (props) {
//   const {mars, us} = props.weather
//   const marsDay = mars.sol_keys[mars.sol_keys.length-1]
//   const d = new Date()
//   return (
//     <div>
//       <p>Updated {d.toString()}</p>
//       <h1>{us.name}</h1>
//       <p>Coordinates: Longitude: {us.coord.lon} & Latitude: {us.coord.lat}</p>
//       <h3>High: {us.main.temp_max} F</h3>
//       <h3>Low: {us.main.temp_min} F</h3>
//       <br />
//       <h1>Mars</h1>
//       <p>High: {mars[marsDay].AT.mx} Celcius </p>
//       <p>Low: {mars[marsDay].AT.mn} Celcius</p>
//       <p></p>
//     </div>
//   )
// }
