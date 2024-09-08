import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

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