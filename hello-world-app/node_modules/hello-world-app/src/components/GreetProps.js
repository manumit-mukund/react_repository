import React from 'react';

const GreetProps = myprops => {

    console.log(myprops.name)

    return (

        <div>
            <h1>Hello, {myprops.name} a.k.a {myprops.heroName}</h1>

            {myprops.children}

        </div>

    )

}

export default GreetProps