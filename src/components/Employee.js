import React from 'react'
import { Table } from 'react-bootstrap'

const usdToNumber = usd => parseFloat(usd.slice(1))

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

    if (employee === undefined) {
      return (
        <div>
          <h1>Not found yet...</h1>
        </div>
      )
    }

    const total = employee.deals.reduce(
      (total, next) => total + usdToNumber(next.value),
      0
    ).toFixed(2)

    return (
      <div>
        <h1>Employee card {employeeId}: {employee.name}</h1>
        <h2>Total: ${total}</h2>
        <Table striped bordered condensed hover responsive>
          <tbody>
          {
            employee.deals.map(
              deal => (
                <tr>
                  <td>{deal.date}</td>
                  <td>{deal.value}</td>
                </tr>
              )
            )
          }
          </tbody>
        </Table>
      </div>
    )
  }
}