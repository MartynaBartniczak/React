import React from 'react'



export default class Employee extends React.Component {

  state = {
    employees: []
  }

  componentWillMount() {
    fetch(
      process.env.PUBLIC_URL + '/data/employees.json'
    ).then(
      response => response.json()
    ).then(
      employees => this.setState({
        employees: employees
      })
    )
  }

  render() {
    const employeeId = parseInt(this.props.match.params.employeeId, 10)
    const employee = this.state.employees.find(
      employee => employee.id === employeeId
    )

    return (
      <div>
        <h1>Employee card {employeeId}: {employee === undefined ? null : employee.name}</h1>
      </div>
    )
  }
}