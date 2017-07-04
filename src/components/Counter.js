import React from 'react'

export default class Counter extends React.Component {

    state = {
        value: 0
    }

    dodaje = () => {
        this.setState({
            value: this.state.value + 1
        })
    }

    odejmuje = () => {
        this.setState({
            value: this.state.value - 1
        })
    }

    resetuje = () => {
        this.setState({
            value:0
    })
    }

    render() {
      return (
            <div>
                <h1>Counter</h1>
                <h2>{this.state.value}</h2>
                <div>
                    <button
                        onClick={this.dodaje}
                    >
                        Increase
                    </button>
                    <button
                        onClick={this.odejmuje}
                    >
                        Decrement
                    </button>
                    <button
                        onClick={this.resetuje}
                    >
                        Reset
                    </button>

                </div>
            </div>
        )
    }
}