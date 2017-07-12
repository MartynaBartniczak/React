import React from 'react'
import { connect } from 'react-redux'
import { FormControl } from 'react-bootstrap'

import { updateSearchPhrase } from '../state/studentSearcher'

const StudentSearcher = ({ searchPhrase, update }) => (
  <FormControl
    value={searchPhrase}
    onChange={update}
    style={{marginBottom: 20}}
  />
)

export default connect(
  state => ({
    searchPhrase: state.studentSearcher.searchPhrase
  }),
  dispatch => ({
    update: event => dispatch(updateSearchPhrase(event.target.value))
  })
)(StudentSearcher)