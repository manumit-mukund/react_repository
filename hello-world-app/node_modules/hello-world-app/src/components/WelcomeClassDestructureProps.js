import React, { Component } from "react";

class WelcomeClassDestructureProps extends Component {

    render() {

        const { name, heroName } = this.props

        return (

            <h1>WelcomeClassDestructureProps, {name} a.k.a {heroName}</h1>
            
        )
    }
}

export default WelcomeClassDestructureProps