import React, { Component } from "react";

class WelcomeClassProps extends Component {

    render() {

        return <h1>Welcome, {this.props.name} a.k.a {this.props.heroName}</h1>
    }
}

export default WelcomeClassProps