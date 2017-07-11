import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchStudents } from '../state/students'
import { add, remove } from '../state/favoriteStudents'

export default connect(
  state => ({
    students: state.students,
    favoriteStudentIds: state.favoriteStudents.favoriteStudentIds
  }),
  dispatch => ({
    fetchStudents: () => dispatch(fetchStudents()),
    addToFav: id => dispatch(add(id)),
    removeFromFav: id => dispatch(remove(id))
  })
)(
  class Students extends React.Component {

    componentWillMount() {
      this.props.fetchStudents()
    }

    render() {
      const { data, fetching, error } = this.props.students
      return (
        <div>
          <h1>Students</h1>
          <ul>
            { error === null ? null : <p>{error.message}</p> }
            { fetching === false ? null : <p>Fetching data...</p>}
            {
              //this.props.students.data !== null && this.props.students.data.map(
              data !== null && data.map(
                student => (
                  <li key={student.id}>
                    { this.props.favoriteStudentIds.includes(student.id) ? '*' : null}
                    <Link to={'/students/' + student.id}>
                      {student.name}
                    </Link>

                    <button onClick={() => this.props.addToFav(student.id)}>Fav</button>
                  </li>
                )
              )
            }
          </ul>
        </div>
      )
    }
  }
)