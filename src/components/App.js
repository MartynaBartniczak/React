import React from 'react'

import Counter from './Counter'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Counter initialValue={1} />
        <Counter initialValue={10} />
        <Counter initialValue={100} delta={100}/>
      </div>
    )
  }
}