import React, { Component } from 'react';

class EventBindClassArrowFunction extends Component {

    constructor() {

        super()

        this.state = {

            message: 'Hello, EventBindClassArrowFunction'

        }
    }

    clickHandler() {

        console.log(this.state.message)
        
        this.setState({

            message: 'Goodbye, EventBindClassArrowFunction...'
        }

        )
    }

    render() {

        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={() => this.clickHandler()}>EventBindClassArrowFunction</button>
            </div>
        )
    }
}

export default EventBindClassArrowFunction