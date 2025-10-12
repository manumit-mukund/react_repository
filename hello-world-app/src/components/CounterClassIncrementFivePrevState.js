import React, { Component } from "react";

class CounterClassIncrementFivePrevState extends Component {

    constructor() {

        super()

        this.state = {

            count: 0
        }
    }

    incrementCount() {

        this.setState(prevState => ({

            count: prevState.count + 1
            
        }),  () => { console.log('Callback value', this.state.count) })

        console.log('this.state.count = ', this.state.count)

    }

    incrementFive() {

        this.incrementCount()
        this.incrementCount()
        this.incrementCount()
        this.incrementCount()
        this.incrementCount()
    }

    render() {

        return (

            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={() => this.incrementFive()}>IncrementFive</button>
            </div>
        )
    }
}

export default CounterClassIncrementFivePrevState