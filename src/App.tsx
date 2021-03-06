import React, { Fragment } from 'react';
import Dashboard from './components/dashboard'
import Spells from './components/spells'
import CharacterPage from './components/characterpage'
import { Navbar, Nav, NavbarBrand, NavLink } from 'reactstrap'
import { Switch, Route } from 'react-router-dom'

const MyNavBar = () => (
  <Navbar color="light" light expand="md">
    <NavbarBrand href="/" className="nav-brand">
      MORNINGS @ HOGWARTS
    </NavbarBrand>
    <Nav className="mr-auto" navbar>
      <NavLink href="/">Dashboard</NavLink>
      <NavLink href="/spells">Spells</NavLink>
      <NavLink href="/character">Character</NavLink>
    </Nav>
  </Navbar>
)

const App = () => {
  return (
    <Fragment>
      <MyNavBar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/spells" component={Spells} />
        <Route path="/character" component={CharacterPage} />
      </Switch>
    </Fragment>
  );
}

export default App;
