import React from 'react'
import { connect } from 'react-redux'

import { fetchStudents } from '../state/students'

export default connect(
  state => ({
    students: state.students
  }),
  dispatch => ({
    fetchStudents: () => dispatch(fetchStudents())
  })
)(
  class Student extends React.Component {

    componentWillMount() {
      this.props.fetchStudents()
    }

  render() {
    const { data, fetching, error } = this.props.students
    const studentId = parseInt(this.props.match.params.studentId, 10)
    const student = data === null ? undefined : data.find(
      student => student.id === studentId
    )

    if (student === undefined) {
      return (
        <div>
          <h1>Not found yet...</h1>
        </div>
      )
    }


    return (
      <div>
        <h1>Student card {studentId}: {student.name}</h1>
      </div>
    )
  }
})