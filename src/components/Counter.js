import React from 'react'

export default class Counter extends React.Component {

  state = {
    value: this.props.initialValue
  }

  updateValue = (delta) => {
    this.setState ({
      value: this.state.value + delta  * (this.props.delta || 1)
      }
    )
  }

  handleIncrementClick = () => {
      this.updateValue(1)
    }

    handelDecrementClick = () => {
      this.updateValue(-1)
    }

    handelresetClick = () => {
      this.setState({
        value: this.props.initialValue
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
          <p />
          <button
            onClick={this.handelDecrementClick}
            >
            Decrease
          </button>
          <p />
          <button
              onClick={this.handelresetClick}
          >
            Clear
          </button>

        </div>
      </div>
    )
  }
}