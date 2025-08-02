import React, { Component } from 'react';

class UserGreetingIfElseMultipleReturns extends Component {

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

export default UserGreetingIfElseMultipleReturns