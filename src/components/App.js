import React from 'react'

import Counter from './Counter'

export default class App extends React.Component {
  render() {
    return (
      <div
        id="foo"
        className="welcome"
      >
        <Counter />
      </div>
    )
  }
}