import React from 'react'
import { connect } from 'react-redux'

import { fetchStudents } from '../state/students'

export default connect(
  state => ({
    availableStudents: state.students.data,
    favoriteStudentIds: state.favoriteStudents.favoriteStudentIds
  }),
  dispatch => ({
    fetchStudents: () => dispatch(fetchStudents())
  })
)(
  class Favorites extends React.Component {

    componentWillMount() {
      this.props.fetchStudents()
    }

    render() {
      return (
        <div>
          <h1>Favorites</h1>
          <ul>
            {
              this.props.availableStudents !== null && this.props.availableStudents.filter(
                student => this.props.favoriteStudentIds.includes(student.id)
              ).map(
                student => (
                  <li key={student.id}>
                    {
                      student.name
                    }
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