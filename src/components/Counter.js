import React from 'react'

import {Button} from 'react-bootstrap'

import './Counter.css'

export default class Counter extends React.Component {

  state = {
    value: this.props.initialValue
  }

  updateValue = (delta) => {
    this.setState({
      value: this.state.value + delta * (this.props.delta || 1)
    })
  }

  handleIncrementClick = () => {
    this.updateValue(1)
  }

  handleDecrementClick = () => {
    this.updateValue(-1)
  }

  handleResetClick = () => {
    this.setState({
      value: this.props.initialValue
    })
  }

  render() {
    console.log(this.props)

    return (
      <div className="Counter">
        <h1>Counter</h1>
        <h2>{this.props.sharedValue}</h2>
        <h2>{this.state.value}</h2>
        <div className="Counter__buttons">
          <Button
            onClick={this.props.handleZupa}
            extraClassName="zupa"
          >
            Awesome Increase
          </Button>
          <Button
            onClick={this.handleIncrementClick}
          >
            Increase
          </Button>

          <Button
            onClick={this.handleDecrementClick}
          >
            Decrement
          </Button>

          <Button
            onClick={this.handleResetClick}
          >
            Reset
          </Button>
        </div>
      </div>
    )
  }
}