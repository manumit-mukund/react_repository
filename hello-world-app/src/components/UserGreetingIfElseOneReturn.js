import React, { Component } from 'react';

class UserGreetingIfElseOneReturn extends Component {

    constructor() {

        super()

        this.state = {

            isLoggedin: false

        }

    }

    render() {

        let message

        if (this.state.isLoggedin) {

            message = <div>Hello, AA</div>

        }
        else {

            message = <div>Hello, BB</div>
        }

        return message

    }
}

export default UserGreetingIfElseOneReturn