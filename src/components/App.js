import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import React from 'react'

import Counter from './Counter'

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