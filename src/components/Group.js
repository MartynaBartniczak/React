import React from 'react'

export default class Group extends React.Component {

  state = {
    groups: []
  }

  componentWillMount() {
    fetch(
      process.env.PUBLIC_URL + '/data/groups.json'
    ).then(
      response => response.json()
    ).then(
      groups => this.setState({
        groups
      })
    )
  }

  render() {
    const groupId = parseInt(this.props.match.params.groupId, 10)
    const group = this.state.groups.find(
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