import React, { Component } from 'react';

class EventBindClassConstructor extends Component {

    constructor() {

        super()

        this.state = {

            message: 'Hello, EventBindClassConstructor'

        }

        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler() {

        console.log('Hello, EventBindClassConstructor')

        this.setState({

            message: 'Goodbye, EventBindClassConstructor'
        }

        )
    }

    render() {

        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler}>EventBindClassConstructor</button>
            </div>
        )
    }
}

export default EventBindClassConstructor