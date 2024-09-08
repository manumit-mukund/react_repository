import React, { Component } from 'react';

class UserGreetingIfElse extends Component {

    constructor(props) {

        super(props)

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