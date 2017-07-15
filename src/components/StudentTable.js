import React from 'react'
import { Table, Button } from 'react-bootstrap'
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
              <Button
                onClick={() => props.addToFav(student.id)}
                disabled={props.favoriteStudentIds.includes(student.id)}
              >
                Add to fav
              </Button>

              <Button
                onClick={() => props.removeFromFav(student.id)}
                disabled={!props.favoriteStudentIds.includes(student.id)}
              >
                Remove from fav
              </Button>

              <Button
                onClick={() => props.toggleFav(student.id)}
                bsStyle={props.favoriteStudentIds.includes(student.id) ? 'primary' : 'default'}
              >
                Toggle
              </Button>
            </td>
          </tr>
        )
      )
    }
    </tbody>
  </Table>

)

export default StudentTable