import React, { useState } from 'react';

function App2() {

    const [click, setClick] = useState(0);

    // Using array destructuring here to 
    // assign initial value 0 to click 
    // and a reference to the function
    // that updates click to setClick
    return (

        <div>

            <p>You clicked {click} times</p>

            <button onClick={() => setClick(click + 1)}>
                Click me
            </button>

        </div>

    );
}

export default App2;