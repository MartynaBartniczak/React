import React from 'react'
import { connect } from 'react-redux'
import { FormControl } from 'react-bootstrap'

const StudentSearcher = () => (
  <FormControl style={{marginBottom: 20}}/>
)

export default connect()(StudentSearcher)