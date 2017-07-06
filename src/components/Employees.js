import React from 'react'

export default class Employees extends React.Component {

  componentWillMount() {
    fetch(
      'http://localhost:3000/data/employees.json'
    ).then(
      response => response.json()
    ).then(
      data => this.setState({
        employees: data.map(
          employee => employee.name
        )
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
              employee => <li>{employee}</li>
            )
          }
        </ul>
      </div>
    )
  }
}