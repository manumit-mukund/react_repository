import React, { useState } from 'react';

function App1() {

    const click = useState('Hooks!');

    return (

        <h1>Welcome to {click}</h1>

    );
}

export default App1;