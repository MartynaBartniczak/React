import React from 'react'

export default class Counter extends React.Component {

  state = {
    value: this.props.deltaValue
  }

  updateValue = (delta) => {
    this.setState({
      value: this.state.value + delta * (this.props.deltaValue || 1)
    })
  }

  handleResetValue = () => {
    this.setState({
      value: this.props.deltaValue
    })
  }


  render() {
    return (
      <div>
        <h1>Counter</h1>
        <h2>{this.props.sharedValue}</h2>
        <h2>{this.state.value}</h2>
        <div>
          <button
            onClick={this.props.handleIncrementClick}
            >
            Awesome Increase
          </button>

          <button
            onClick={ () => this.updateValue(1)}
          >
            Increase
          </button>

          <button
            onClick={ () =>this.updateValue(-1)}
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