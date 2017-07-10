import React from 'react'
import { Link } from 'react-router-dom'
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap'
import {
  Navbar,
  Nav,
  NavItem
} from 'react-bootstrap'

const MainMenu = (props) => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">Zupa</Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <IndexLinkContainer to="/">
        <NavItem>Home</NavItem>
      </IndexLinkContainer>
      <LinkContainer to="/smart-counter">
        <NavItem>Smart Counter</NavItem>
      </LinkContainer>
      <LinkContainer to="/counters">
        <NavItem>Counters</NavItem>
      </LinkContainer>
      <LinkContainer to="/employees">
        <NavItem>Employees</NavItem>
      </LinkContainer>
      <LinkContainer to="/students">
        <NavItem>Students</NavItem>
      </LinkContainer>
      <LinkContainer to="/groups">
        <NavItem>Groups</NavItem>
      </LinkContainer>
    </Nav>
  </Navbar>
)

export default MainMenu