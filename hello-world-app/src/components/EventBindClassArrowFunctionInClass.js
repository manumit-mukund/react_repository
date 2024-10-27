import React, { Component } from 'react';

class EventBindClassArrowFunctionInClass extends Component {

    constructor(props) {

        super(props)

        this.state = {

            message: 'Hello, EventBindClassArrowFunctionInClass'

        }

    }

    clickHandler = () => {

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