import React from 'react'

import Counter from './Counter'

export default class App extends React.Component {
  state = {
    commonCounterValue: 10
  }

  inceaseCommonCounter = () => {
    this.setState({
      commonCounterValue: this.state.commonCounterValue+1
    })
  }

  render() {
    return (
      <div>
        <Counter
          deltaValue={2}
          handleIncrementClick={this.inceaseCommonCounter}
          sharedValue={this.state.commonCounterValue}/>
        <Counter
          deltaValue={1}
          handleIncrementClick={this.inceaseCommonCounter}
          sharedValue={this.state.commonCounterValue}/>
        <Counter
          deltaValue={2}
          handleIncrementClick={this.inceaseCommonCounter}
          sharedValue={this.state.commonCounterValue}/>
        <Counter
          deltaValue={6}
          handleIncrementClick={this.inceaseCommonCounter}
          sharedValue={this.state.commonCounterValue}/>
        <Counter
          deltaValue={100}
          handleIncrementClick={this.inceaseCommonCounter}
          sharedValue={this.state.commonCounterValue}/>
        <Counter
          deltaValue={90}
          handleIncrementClick={this.inceaseCommonCounter}
          sharedValue={this.state.commonCounterValue}/>
        <Counter
          deltaValue={2}
          handleIncrementClick={this.inceaseCommonCounter}
          sharedValue={this.state.commonCounterValue}/>
        <Counter />
        <Counter />
      </div>
    )
  }
}