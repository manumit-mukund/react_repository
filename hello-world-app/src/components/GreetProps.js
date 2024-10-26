import React from 'react';

const GreetProps = myprops => {

    console.log(myprops.name)
    //return <h1>Hello, {props.name} a.k.a {props.heroName}</h1>
    return (
        <div>
            <h1>Hello, {myprops.name} a.k.a {myprops.heroName}</h1>
            {myprops.children}
        </div>
    )

}

export default GreetProps