import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchStudents } from '../state/students'

export default connect(
  state => ({
    students: state.students
  }),
  dispatch => ({
    fetchStudents: () => dispatch(fetchStudents())
  })
)(
  class Students extends React.Component {

    componentWillMount() {
      this.props.fetchStudents()
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