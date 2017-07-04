import React from 'react'

import Counter from './Counter'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Counter />
        <Counter />
        <Counter delta={100}/>
        <Counter />
        <Counter />
        <Counter />
      </div>
    )
  }
}