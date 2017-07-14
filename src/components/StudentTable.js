import React from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const StudentTable = (props) => (
  <Table bordered striped hover responsive>
    <thead>
    <tr>
      <th>Is fav</th>
      <th>Name</th>
      <th>Surname</th>
      <th>City</th>
      <th>Gender</th>
      <th>Is smoking</th>
      <th>Options</th>
    </tr>
    </thead>
    <tbody>
    {
      //this.props.students.data !== null && this.props.students.data.map(
      props.students.map(
        student => (
          <tr key={student.id}>
            <td>
              { props.favoriteStudentIds.includes(student.id) ? '*' : null}
            </td>
            <td>
              <Link to={'/students/' + student.id}>
                {student.name}
              </Link>
            </td>
            <td>
              {student.surname}
            </td>

            <td>
              {student.city}
            </td>

            <td>
              {student.gender}
            </td>

            <td>
              {student.smoking ? 'smoking' : 'fine'}
            </td>

            <td>
              <button onClick={() => props.addToFav(student.id)}>
                Add to fav
              </button>

              <button onClick={() => props.removeFromFav(student.id)}>
                Remove from fav
              </button>

              <button onClick={() => props.toggleFav(student.id)}>
                Toggle
              </button>
            </td>
          </tr>
        )
      )
    }
    </tbody>
  </Table>

)

export default StudentTable