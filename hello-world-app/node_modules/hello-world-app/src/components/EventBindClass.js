import React, { Component } from 'react';

class EventBindClass extends Component {

    constructor(props) {

        super(props)

        this.state = {

            message: 'Hello, EventBindClass'

        }
    }

    clickHandler() {

        console.log('Hello, EventBindClass')
        this.setState({

            message: 'Goodbye'
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