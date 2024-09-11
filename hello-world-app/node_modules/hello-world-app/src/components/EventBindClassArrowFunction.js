import React, { Component } from 'react';

class EventBindClassArrowFunction extends Component {

    constructor(props) {

        super(props)

        this.state = {

            message: 'Hello, EventBindClassArrowFunction'

        }
    }

    clickHandler() {

        console.log('Hello, EventBindClassArrowFunction')
        
        this.setState({

            message: 'Goodbye'
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