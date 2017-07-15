import React from 'react'

export default class Student extends React.Component {

  state = {
    students: []
  }

  componentWillMount() {
    fetch(
      process.env.PUBLIC_URL + '/data/students.json'
    ).then(
      response => response.json()
    ).then(
      students => this.setState({
        students
      })
    )
  }

  render() {
    const studentId = parseInt(this.props.match.params.studentId, 10)
    const student = this.state.students.find(
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
}