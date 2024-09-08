import React, { Component } from 'react';

class EventBindClassConstructor extends Component {

    constructor(props) {

        super(props)

        this.state = {

            message: 'Hello, EventBindClassConstructor'

        }

        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler() {

        console.log('Hello, EventBindClassConstructor')
        this.setState({

            message: 'Goodbye'
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