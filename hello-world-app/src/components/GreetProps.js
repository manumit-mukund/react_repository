import React from 'react';

const GreetProps = props => {

    console.log(props.name)
    //return <h1>Hello, {props.name} a.k.a {props.heroName}</h1>
    return (
        <div>
            <h1>Hello, {props.name} a.k.a {props.heroName}</h1>
            {props.children}
        </div>
    )

}

export default GreetProps