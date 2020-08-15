import React, {Fragment, useState, useEffect } from 'react';
import Stock from './components/stock'
import Weather from './components/weather'
import News from './components/news'
import { Navbar, Nav, NavbarBrand, NavLink, Form, Input, Button } from 'reactstrap'
// import Weather from './components/weather'

import './App.css';


const MyNavBar = () => (
  <Navbar color="light" light expand="md">
    <NavbarBrand href="/">
      STACKATHON
    </NavbarBrand>
    <Nav className="mr-auto" navbar>
      <NavLink href="/weather">Weather</NavLink>
      <NavLink href="/news">Daily Prophet</NavLink>
      <NavLink href="/stocks">My Galleons</NavLink>
    </Nav>
  </Navbar>
)

const App = () => {
  return (
    <Fragment>
      <MyNavBar />
      <Stock ticker="TSLA" />
      <Weather zip="10003" />
      <News />
    </Fragment>
  );
}

export default App;
