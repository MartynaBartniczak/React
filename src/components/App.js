import React from 'react'
import {
  Navbar,
  Nav,
  MenuItem,
  NavItem,
  NavDropdown
} from 'react-bootstrap'

import Counter from './Counter'
import SignUpForm from './SignUpForm'

export default class App extends React.Component {

  state = {
    commonCounterValue: 10
  }

  increaseCommonCounter = () => {
    this.setState({
      commonCounterValue: this.state.commonCounterValue + 1
    })
  }

  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">React-Bootstrap</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="/">Link</NavItem>
            <NavItem eventKey={2} href="/">Link</NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>

        <SignUpForm/>

        <Counter
          initialValue={1}
          handleZupa={this.increaseCommonCounter}
          sharedValue={this.state.commonCounterValue}
        />
        <Counter
          initialValue={10}
          handleZupa={this.increaseCommonCounter}
          sharedValue={this.state.commonCounterValue}
        />
        <Counter
          initialValue={100}
          handleZupa={this.increaseCommonCounter}
          sharedValue={this.state.commonCounterValue}
          delta={100}
        />
      </div>
    )
  }
}