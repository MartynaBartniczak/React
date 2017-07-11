import React from 'react'
import { connect } from 'react-redux'

import { fetchGroups } from '../state/groups'

export default connect(
  state => ({
    groups: state.groups
  }),
  dispatch => ({
    fetchGroups: () => dispatch(fetchGroups())
  })
)(
  class Group extends React.Component {

    componentWillMount() {
      this.props.fetchGroups()
    }

    render() {
      const { data, fetching, error } = this.props.groups
      const groupId = parseInt(this.props.match.params.groupId, 10)
      const group = data === null ? undefined : data.find(
        group => group.id === groupId
      )

      if (group === undefined) {
        return (
          <div>
            <h1>Not found yet...</h1>
          </div>
        )
      }


      return (
        <div>
          <h1>Group card {groupId}: {group.name}</h1>
        </div>
      )
    }
  }
)