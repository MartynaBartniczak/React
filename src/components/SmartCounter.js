import React from 'react'
import { connect } from 'react-redux'

const SmartCounter = ({ value }) => (
  <div>
    <h1>Smart Counter</h1>
    <h2>{value}</h2>
  </div>
)

export default connect(
  state => ({
    value: state.value
  })
)(SmartCounter)