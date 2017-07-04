import React from 'react'

export default class Counter extends React.Component {

  state = {
    value: 0
  }

  updateValue = (delta) => {
    this.setState({
      value: this.state.value + delta
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
      value: 0
    })
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <h2>{this.state.value}</h2>
        <div>
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