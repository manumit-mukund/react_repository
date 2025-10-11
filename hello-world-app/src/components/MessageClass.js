import React, { Component } from "react";

class MessageClass extends Component {

    constructor() {

        super()

        this.state = {

            mymessage: 'Welcome, guest'

        }
    }

    changeMessage() {

        this.setState({

            mymessage: 'Goodbye, guest'
            
        })
    }

    render() {

        return (
            <div>
                <h1>{this.state.mymessage}</h1>
                <button onClick={() => this.changeMessage()}>Click here</button>
            </div>
        )
    }
}

export default MessageClass