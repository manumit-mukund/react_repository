import React from 'react';

const GreetConstDestructureProps = props => {

    const { name, heroName } = props

    return (

        <div>
            <h1>Hello, GreetConstDestructureProps: {name} a.k.a {heroName}</h1>
        </div>

    )

}

export default GreetConstDestructureProps