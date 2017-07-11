import React from 'react'
import { Link } from 'react-router-dom'

import { fetchStudents } from '../state/students'

export default connect(
  state => ({
    students: state.students
  }),
  dispatch => ({
    fetchEmployees: () => dispatch(fetchEmployees())
  })
)(
  class Employees extends React.Component {

    componentWillMount() {
      this.props.fetchEmployees()
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