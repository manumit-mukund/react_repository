import React, { Component } from 'react';

class EventBindClassArrowFunctionInClass extends Component {

    constructor() {

        super()

        this.state = {

            message: 'Hello, EventBindClassArrowFunctionInClass'

        }

    }

    clickHandler = () => {

         console.log(this.state.message)

        this.setState({

            message: 'Goodbye, EventBindClassArrowFunctionInClass...'
        })
    }

    render() {

        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler}>EventBindClassArrowFunctionInClass</button>
            </div>
        )
    }
}

export default EventBindClassArrowFunctionInClass