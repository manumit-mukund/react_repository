import React, { Component } from 'react';

class UserGreetingIfElseShortCircuit extends Component {

    constructor() {

        super()

        this.state = {

            isLoggedin: true

        }

    }


    render() {

        return this.state.isLoggedin && <div>Hello, AAAA</div>

    }
}

export default UserGreetingIfElseShortCircuit