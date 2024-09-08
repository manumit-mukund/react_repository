import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class UserGreetingIfElseSecondMethod extends Component {

    constructor(props) {

        super(props)

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

export default UserGreetingIfElseSecondMethod