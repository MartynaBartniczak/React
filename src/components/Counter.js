import React from 'react'

export default class Counter extends React.Component {
  render() {
    return (
      <div>
        <h1>Counter - {this.props.initialValue}</h1>
        <strong>{typeof this.props.initialValue}</strong>
      </div>
    )
  }
}