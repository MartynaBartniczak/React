import React from 'react'

export default class Groups extends React.Component {

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
  }

  render() {
    return (
      <div>
        <h1>Groups</h1>
        <ul>
          { this.state === null ? <p>Fetching data ....</p> : null}
          {
            this.state !== null && this.state.groups.map(
              group => <li key={group.id}>{group.name}</li>
            )
          }
        </ul>
      </div>
    )
  }
}