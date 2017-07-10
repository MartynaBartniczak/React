import React from 'react'
import { connect } from 'react-redux'

const SmartCounter = ({ value, handleClick }) => (
  <div>
    <h1>Smart Counter</h1>
    <h2>{value}</h2>
    <button onClick={handleClick}>Increment</button>
  </div>
)

export default connect(
  state => ({
    value: state.value
  }),
  dispatch => ({
    handleClick: () => dispatch({ type: 'INCREMENT' })
  })
)(SmartCounter)