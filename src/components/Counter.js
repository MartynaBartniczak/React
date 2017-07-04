import React from 'react'

export default class Counter extends React.Component {

  state = {
    value: 0
  }

  handleIncrementClick = () => {
    this.setState({
      value: this.state.value + 1
    })
  }

  handleDecrementValue = () => {
    this.setState({
      value: this.state.value - 1
    })
  }

  handleResetValue = () => {
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
            onClick={this.handleDecrementValue}
          >
            Decrease
          </button>

          <button
            onClick={this.handleResetValue}
          >
            Reset
          </button>
        </div>
      </div>
    )
  }
}