import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class UserGreetingIfElseThirdMethod extends Component {

    constructor(props) {

        super(props)

        this.state = {

            isLoggedin: false

        }

    }


    render() {

        return (this.state.isLoggedin ?
            (<div>Hello, AAA</div>) :
            (<div>Hello, BBB</div>)
        )

    }
}

export default UserGreetingIfElseThirdMethod