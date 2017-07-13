import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'

import StudentSearcher from './StudentSearcher'
import StudentTable from './StudentTable'

import { fetchStudents } from '../state/students'
import { add, remove, toggle } from '../state/favoriteStudents'
import { activateSmokingFilter } from '../state/studentFilters'

export default connect(
  state => ({
    students: state.students,
    favoriteStudentIds: state.favoriteStudents.favoriteStudentIds,
    searchPhrase: state.studentSearcher.searchPhrase,
    activeFilterNames: state.studentFilters.activeFilterNames
  }),
  dispatch => ({
    fetchStudents: () => dispatch(fetchStudents()),
    addToFav: id => dispatch(add(id)),
    removeFromFav: id => dispatch(remove(id)),
    toggleFav: id => dispatch(toggle(id)),
    activateFilter: () => dispatch(activateSmokingFilter())
  })
)(
  class Students extends React.Component {

    componentWillMount() {
      this.props.fetchStudents()
    }

    render() {
      const { data, fetching, error } = this.props.students
      const smokingFilterActive = this.props.activeFilterNames.includes('smokingOnly')
      const dataToDisplay = data === null ? [] : data.filter(
        student => (
          student.name.toLowerCase().includes(this.props.searchPhrase.toLowerCase()) ||
          student.surname.toLowerCase().includes(this.props.searchPhrase.toLowerCase())
        )
      ).filter(
        student => smokingFilterActive === false ? true : student.smoking === true
      )


      return (
        <div>
          <h1>Students</h1>

          <StudentSearcher/>

          <Button
            onClick={this.props.activateFilter}
            bsStyle={smokingFilterActive ? 'primary' : 'default'}
          >
            Smoking only
          </Button>

          { error === null ? null : <p>{error.message}</p> }
          { fetching === false ? null : <p>Fetching data...</p>}

          <StudentTable
            students={dataToDisplay}
            favoriteStudentIds={this.props.favoriteStudentIds}
            addToFav={this.props.addToFav}
            removeFromFav={this.props.removeFromFav}
            toggleFav={this.props.toggleFav}
          />
        </div>
      )
    }
  }
)