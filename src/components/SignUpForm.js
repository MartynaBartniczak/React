import React from 'react'

export default class SignUpForm extends React.Component {

  state = {
    username: '',
    users: []
  }

  componentWillMount() {
    console.log(this.secondInput)
    this.setState(
      JSON.parse(localStorage.getItem('state'))
    )
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({
      username: '',
      users: this.state.users.concat(this.state.username),
    }, () => localStorage.setItem('state', JSON.stringify(this.state)))
  }

  handleUsernameChange = event => {
    this.setState({
      username: event.target.value
    })
  }

  componentDidMount() {
    console.log(this.secondInput)
  }

  render() {
    console.log(this.secondInput)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Username:
          <input
            value={this.state.username}
            onChange={this.handleUsernameChange}
          />
          <input
            ref={element => this.secondInput = element}
            defaultValue={500}
          />
          <button>Save</button>
        </form>

        <div>
          {
            this.state.users.map(
              (username, index) => (
                <p key={index + '.' + username}>{index + 1}.{username}</p>
              )
            )
          }
        </div>
      </div>
    )
  }
}