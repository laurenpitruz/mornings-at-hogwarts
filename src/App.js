import React, {Fragment, useState, useEffect } from 'react';
import axios from 'axios'
// import { Navbar, Nav, NavbarBrand, NavLink, Form, Input, Button } from 'reactstrap'
import Weather from './components/weather'

import './App.css';


// const MyNavBar = () => (
//   <Navbar color="light" light expand="md">
//     <NavbarBrand href="/">
//       STACKATHON
//     </NavbarBrand>
//     <Nav className="mr-auto" navbar>
//       <NavLink href="/weather">Weather</NavLink>
//       <NavLink href="/news">News</NavLink>
//       <NavLink href="/stocks">Stocks</NavLink>
//     </Nav>
//   </Navbar>
// )


const WeatherPage = () => {
  const [zip, setZip] = useState('10003')
  const [weather, setWeather] = useState()

  useEffect(() => {
    const getWeather = async () => {
      const us = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=94040,us&units=imperial&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`)

      const mars = await axios.get(`https://api.nasa.gov/insight_weather/?api_key=${process.env.REACT_APP_NASA_API_KEY}&feedtype=json&ver=1.0`)
      setWeather({mars: mars.data, us: us.data})
    }

    getWeather()
  }, [zip])
  return (
    <div>
      {weather && <Weather weather={weather} />}
    </div>
  )
}

const App = () => {
  return (
    <Fragment>
      <WeatherPage />
    </Fragment>
  );
}

export default App;
