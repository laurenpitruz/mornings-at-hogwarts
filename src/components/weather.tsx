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
      <h6><strong>Currently:</strong> {data.weather.currentWeather.temp} F & {data.weather.currentWeather.status}</h6>
      <p><strong>H:</strong> {data.weather.currentWeather.tempHigh} || <strong>L:</strong> {data.weather.currentWeather.tempLow}</p>
      <p><strong>Sunrise:</strong> {data.weather.sunrise}</p>
      <p><strong>Sunset:</strong> {data.weather.sunset}</p>
      <small>lon: {data.weather.longitude} | lat: {data.weather.latitude}</small>
    </Fragment>
  )
}
