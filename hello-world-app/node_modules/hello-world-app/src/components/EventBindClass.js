import React, { Component } from 'react';

class EventBindClass extends Component {

    constructor() {

        super()

        this.state = {

            message: 'Hello, EventBindClass'

        }
    }

    clickHandler() {

        console.log('Hello, EventBindClass')
        
        this.setState({

            message: 'Goodbye, EventBindClass...'
        }

        )
    }

    render() {

        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler.bind(this)}>ClickEventBindClass</button>
            </div>
        )
    }
}

export default EventBindClass