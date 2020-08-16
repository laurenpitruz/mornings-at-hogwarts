import React, { Fragment } from 'react';
import Dashboard from './components/dashboard'
import { Navbar, Nav, NavbarBrand, NavLink } from 'reactstrap'

const MyNavBar = () => (
  <Navbar color="dark" light expand="md">
    <NavbarBrand href="/" className="nav-brand">
      MORNINGS @ HOGWARTS
    </NavbarBrand>
    <Nav className="mr-auto" navbar>
      <NavLink href="/">Dashboard</NavLink>
    </Nav>
  </Navbar>
)

const App = () => {
  return (
    <Fragment>
      <MyNavBar />
      <Dashboard />
    </Fragment>
  );
}

export default App;
