import React, { Component } from "react";

class CounterClassPropsIncrementFive extends Component {

    constructor(props) {

        super(props)

        this.state = {
            count: 0
        }
    }

    incrementCount() {

        //this.state.count = this.state.count + 1 //incorrect approach
        this.setState({

            count: this.state.count + 1

        }, () => { console.log('Callback value', this.state.count) })

        console.log('this.state.count = ', this.state.count)

    }

    incrementFive(){

        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
    }

    render() {

        return (

            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={() => this.incrementFive()}>Increment Five</button>
            </div>
        )
    }
}

export default CounterClassPropsIncrementFive