import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchStudents } from '../state/students'

export default connect(
  state => ({}),
  dispatch => ({
    fetchStudents: () => dispatch(fetchStudents())
  })
)(
  class Groups extends React.Component {

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

      this.props.fetchStudents()
    }

    render() {
      return (
        <div>
          <h1>Groups</h1>
          <ul>
            {
              this.state.groups.map(
                group => (
                  <li key={group.id}>
                    <Link to={'/groups/' + group.id}>
                      {group.name}
                    </Link>
                    <ul>
                      {
                        group.studentIds.map(
                          studentId => this.state.students.find(
                            student => student.id === studentId
                          )
                        ).filter(
                          student => student !== undefined
                        ).map(
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
