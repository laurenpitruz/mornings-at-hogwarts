import React, { Fragment } from 'react';
import Dashboard from './components/dashboard'
import { Navbar, Nav, NavbarBrand, NavLink } from 'reactstrap'
import { Switch, Route } from 'react-router-dom'

const MyNavBar = () => (
  <Navbar color="light" light expand="md">
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
      <Switch>
        <Route path="/" component={Dashboard} />
      </Switch>
    </Fragment>
  );
}

export default App;
