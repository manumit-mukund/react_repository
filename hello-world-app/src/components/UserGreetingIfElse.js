import React, { Component } from 'react';

class UserGreetingIfElse extends Component {

    constructor() {

        super()

        this.state = {

            isLoggedin: false

        }

    }

    render() {

        if (this.state.isLoggedin) {

            return (<div>Hello, A</div>)

        }
        else {

            return (<div>Hello, B</div>)
        }

    }
}

export default UserGreetingIfElse