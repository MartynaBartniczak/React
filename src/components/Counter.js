import React from 'react'

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
      <div>
        <h1>Counter</h1>
        <h2>{this.props.sharedValue}</h2>
        <h2>{this.state.value}</h2>
        <div>
          <button
            onClick={this.props.handleZupa}
          >
            Awesome Increase
          </button>
          <button
            onClick={this.handleIncrementClick}
          >
            Increase
          </button>

          <button
            onClick={this.handleDecrementClick}
          >
            Decrement
          </button>

          <button
            onClick={this.handleResetClick}
          >
            Reset
          </button>
        </div>
      </div>
    )
  }
}