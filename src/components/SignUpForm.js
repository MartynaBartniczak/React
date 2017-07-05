import React from 'react'

export default class SignUpForm extends React.Component {

  state = {
    username: '',
    users: []
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({
      username: '',
      users: this.state.users.concat(this.state.username),
    })
  }

  handleUsernameChange = event => {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Username:
          <input
            value={this.state.username}
            onChange={this.handleUsernameChange}
          />
          <button>Save</button>
        </form>

        <div>
          {
            this.state.users.map(
              function (username, index) {
                return (
                  <p key={index}>{username}</p>
                )
              }
            )
          }
        </div>
      </div>
    )
  }
}