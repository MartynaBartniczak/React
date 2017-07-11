import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchBegin, fetchSuccess, fetchFail } from '../state/students'

export default connect(
  state => ({
    students: state.students
  }),
  dispatch => ({
    fetchBegin: () => dispatch(fetchBegin()),
    fetchSuccess: data => dispatch(fetchSuccess(data)),
    fetchFail: error => dispatch(fetchFail(error))
  })
)(
  class Students extends React.Component {

    componentWillMount() {
      this.props.fetchBegin()
      fetch(
        'http://localhost:3000/data/students.json'
      ).then(
        response => response.json()
      ).then(
        data => this.props.fetchSuccess(data)
      ).catch(
        error => this.props.fetchFail(error)
      )
    }

    render() {
      const { data, fetching, error } = this.props.students
      return (
        <div>
          <h1>Students</h1>
          <ul>
            { error === null ? null : <p>{error.message}</p> }
            { fetching === false ? null : <p>Fetching data...</p>}
            {
              //this.props.students.data !== null && this.props.students.data.map(
              data !== null && data.map(
                student => (
                  <li key={student.id}>
                    <Link to={'/students/' + student.id}>
                      {student.name}
                    </Link>
                  </li>
                )
              )
            }
          </ul>
        </div>
      )
    }
  }
)