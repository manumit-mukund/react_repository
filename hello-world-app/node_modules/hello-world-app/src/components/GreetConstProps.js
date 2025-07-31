import React from 'react';

const GreetConstProps = myprops => {

    console.log(myprops.name)

    return (

        <div>
            <h1>Hello, {myprops.name} a.k.a {myprops.heroName}</h1>

            {myprops.children}

        </div>

    )

}

export default GreetConstProps