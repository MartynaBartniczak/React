import React from 'react'
import { Link } from 'react-router-dom'

export default class Students extends React.Component {

  componentWillMount() {
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
    return (
      <div>
        <h1>Students</h1>
        <ul>
          { this.state === null ? <p>Fetching data ....</p> : null}
          {
            this.state !== null && this.state.students.map(
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