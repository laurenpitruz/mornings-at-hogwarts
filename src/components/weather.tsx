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
      <h3>{data.weather.cityName} </h3>
      <h6>Currently: {data.weather.currentWeather.status} | {data.weather.currentWeather.temp} F</h6>
      <p>Daily High: {data.weather.currentWeather.tempHigh} || Daily Low: {data.weather.currentWeather.tempLow}</p>
      <small>lon: {data.weather.longitude} | lat: {data.weather.latitude}</small>
      <br />
      <p>Sunrise: {data.weather.sunrise}</p>
      <p>Sunset: {data.weather.sunset}</p>
    </Fragment>
  )
}
