import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchStudents } from '../state/students'
import { fetchGroups } from '../state/groups'

export default connect(
  state => ({}),
  dispatch => ({
    fetchStudents: () => dispatch(fetchStudents()),
    fetchGroups: () => dispatch(fetchGroups())
  })
)(
  class Groups extends React.Component {

    state = {
      groups: [],
      students: []
    }

    componentWillMount() {
      this.props.fetchGroups()
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
