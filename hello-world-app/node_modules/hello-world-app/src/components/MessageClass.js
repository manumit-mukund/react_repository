import React, { Component } from "react";

class MessageClass extends Component {

    constructor() {

        super()
        this.state = {
            message: 'Welcome, message constructor'
        }
    }

    changeMessage() {

        this.setState({

            message: 'Thanks for visitng the page!'
        })
    }

    render() {

        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Click here</button>
            </div>
        )
    }
}

export default MessageClass