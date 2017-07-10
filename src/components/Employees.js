import React from 'react'
import { Link } from 'react-router-dom'

export default class Employees extends React.Component {

  componentWillMount() {
    fetch(
      'http://localhost:3000/data/employees.json'
    ).then(
      response => response.json()
    ).then(
      data => this.setState({
        employees: data
      })
    ).catch(
      error => console.log(error.message)
    )
  }

  render() {
    return (
      <div>
        <h1>Employees</h1>
        <ul>
          { this.state === null ? <p>Fetching data ....</p> : null}
          {
            this.state !== null && this.state.employees.map(
              employee => (
                <li key={employee.id}>
                  <Link to={'/employees/' + employee.id}>
                    {employee.name}
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