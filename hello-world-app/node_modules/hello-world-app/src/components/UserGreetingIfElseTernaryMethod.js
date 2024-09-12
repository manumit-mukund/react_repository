import React, { Component } from 'react';

class UserGreetingIfElseTernaryMethod extends Component {

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

export default UserGreetingIfElseTernaryMethod