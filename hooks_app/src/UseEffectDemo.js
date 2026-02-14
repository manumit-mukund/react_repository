import React, { useState, useEffect } from 'react';

function UseEffectDemo() {

    const [data, setData] = useState(null);

    // The effect runs after the component mounts
    useEffect(() => {

        fetch('https://api.example.com/data')
            .then(response => response.json())
            .then(data => setData(data));

    }, []); // Empty dependency array [] means it runs once on mount

    return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>;
}

export default UseEffectDemo;