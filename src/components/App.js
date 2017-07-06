import React from 'react'

import Counter from './Counter'
import SignUpForm from './SignUpForm'
import MainMenu from './MainMenu'
import Employees from './Employees'

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
        <MainMenu/>

        <Employees/>

        <h1>{this.props.name}</h1>
        <p>Created by: {this.props.author}</p>
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