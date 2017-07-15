import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchStudents } from '../state/students'
import { fetchGroups } from '../state/groups'

export default connect(
  state => ({
    students: state.students,
    groups: state.groups
  }),
  dispatch => ({
    fetchStudents: () => dispatch(fetchStudents()),
    fetchGroups: () => dispatch(fetchGroups())
  })
)(
  class Groups extends React.Component {

    componentWillMount() {
      this.props.fetchGroups()
      this.props.fetchStudents()
    }

    render() {
      const { students, groups } = this.props

      return (
        <div>
          <h1>Groups</h1>
          <ul>
            {
              groups.data === null ? null : groups.data.map(
                group => (
                  <li key={group.id}>
                    <Link to={'/groups/' + group.id}>
                      {group.name}
                    </Link>
                    <ul>
                      {
                        group.studentIds.map(
                          studentId => students.data === null ? undefined : students.data.find(
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
