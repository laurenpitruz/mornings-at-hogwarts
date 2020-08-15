import React, { Fragment } from 'react'
import { gql, useQuery } from '@apollo/client';
import Loading from './loading'
import Error from './error'

const GET_WEATHER = gql`
  query GetWeather($zip: String!) {
    weather(zip: $zip) {
      cityName
      zip
      sunrise
      sunset
      longitude
      latitude
      currentWeather {
        temp
        status
        tempHigh
        tempLow
      }
  	}
  }
`

interface Zip {
  zip: string;
}

export default function Weather ({ zip }: Zip) {
  const { data, loading, error } = useQuery(GET_WEATHER, {
    variables: { zip }
  })
  if (loading) return <Loading />
  if (error) return <Error />
  if (!data) return <h1>Not Found</h1>

  return (
    <Fragment>
      <h3>City: {data.weather.cityName} </h3>
      <p><small>lon: {data.weather.longitude} | lat: {data.weather.latitude}</small></p>
      <br/>
      <h6>Current Weather</h6>
      <p>Currently: {data.weather.currentWeather.status}</p>
      <p>Current Temp: {data.weather.currentWeather.temp}</p>
      <p>High Temp: {data.weather.currentWeather.tempHigh}</p>
      <p>Low Temp: {data.weather.currentWeather.tempLow}</p>
      <p>Sunrise: {data.weather.sunrise}</p>
      <br/>
      <p>Sunset: {data.weather.sunset}</p>
    </Fragment>
  )
}
