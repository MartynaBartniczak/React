import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'

import StudentSearcher from './StudentSearcher'
import StudentTable from './StudentTable'

import { fetchStudents } from '../state/students'
import { add, remove, toggle } from '../state/favoriteStudents'
import { activateFilter } from '../state/studentFilters'

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
    activateFilter: filterName => dispatch(activateFilter(filterName))
  })
)(
  class Students extends React.Component {

    componentWillMount() {
      this.props.fetchStudents()
    }

    render() {
      const { data, fetching, error } = this.props.students

      const filters = {
        smokingOnly: student => student.smoking === true,
        male: student => student.gender === 'Male',
        female: student => student.gender === 'Female',
      }

      const dataToDisplay = data === null ? [] : data.filter(
        student => (
          student.name.toLowerCase().includes(this.props.searchPhrase.toLowerCase()) ||
          student.surname.toLowerCase().includes(this.props.searchPhrase.toLowerCase())
        )
      ).filter(
        student => this.props.activeFilterNames.map(
          filterName => filters[filterName] || (() => true)
        ).every(
          f => f(student) === true
        )
      )

      const buttons = [
        {
          label: 'Smoking only',
          filterName: 'smokingOnly'
        },
        {
          label: 'Male',
          filterName: 'male'
        },
        {
          label: 'Female',
          filterName: 'female'
        }
      ]


      return (
        <div>
          <h1>Students</h1>

          <StudentSearcher/>

          {
            buttons.map(
              button => (
                <Button
                  key={button.filterName}
                  onClick={() => this.props.activateFilter(button.filterName)}
                  active={this.props.activeFilterNames.includes(button.filterName)}
                >
                  {button.label}
                </Button>
              )
            )
          }

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