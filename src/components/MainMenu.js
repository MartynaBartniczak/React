import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from  'react-router-dom'
import {
  Navbar,
  Nav,
  MenuItem,
  NavItem,
  NavDropdown
} from 'react-bootstrap'

const MainMenu = (props) => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">
          Zupa
        </Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <LinkContainer to="/counters">
      <NavItem>Counters</NavItem>
      </LinkContainer>
      <LinkContainer to="/employees">
      <NavItem>Employees</NavItem>
      </LinkContainer>
      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.4}>The life of Zupa</MenuItem>
      </NavDropdown>
    </Nav>
  </Navbar>
)

export default MainMenu