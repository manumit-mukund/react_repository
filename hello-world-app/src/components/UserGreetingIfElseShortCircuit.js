import React, { Component } from 'react';

class UserGreetingIfElseShortCircuit extends Component {

    constructor(props) {

        super(props)

        this.state = {

            isLoggedin: true

        }

    }


    render() {

        return this.state.isLoggedin && <div>Hello, AAAA</div>

    }
}

export default UserGreetingIfElseShortCircuit