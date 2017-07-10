import React from 'react'
import { connect } from 'react-redux'

const SmartCounter = ({ value, handleClick, handleDecrementClick }) => (
  <div>
    <h1>Smart Counter</h1>
    <h2>{value}</h2>
    <button onClick={handleClick}>Increment</button>
    <button onClick={handleDecrementClick}>Decrement</button>
  </div>
)

export default connect(
  state => ({
    value: state.counter.value
  }),
  dispatch => ({
    handleClick: () => dispatch({ type: 'INCREMENT' }),
    handleDecrementClick: () => dispatch({ type: 'DECREMENT' })
  })
)(SmartCounter)