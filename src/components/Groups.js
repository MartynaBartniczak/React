import React from 'react'

export default class Groups extends React.Component {

  state = {
    groups: [],
    students: []
  }

  componentWillMount() {
    fetch(
      'http://localhost:3000/data/groups.json'
    ).then(
      response => response.json()
    ).then(
      data => this.setState({
        groups: data
      })
    ).catch(
      error => console.log(error.message)
    )

    fetch(
      'http://localhost:3000/data/students.json'
    ).then(
      response => response.json()
    ).then(
      data => this.setState({
        students: data
      })
    ).catch(
      error => console.log(error.message)
    )
  }

  render() {
    console.log(JSON.stringify(this.state))
    return (
      <div>
        <h1>Groups</h1>
        <ul>
          {
            this.state !== null && this.state.groups.map(
              group => <li key={group.id}>{group.name}</li>
            )
          }
        </ul>
        <h1>Students</h1>
        <ul>
          {
            this.state !== null && this.state.students.map(
              student => <li key={student.id}>{student.name}</li>
            )
          }
        </ul>
      </div>
    )
  }
}