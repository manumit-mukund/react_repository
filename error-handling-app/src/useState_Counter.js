import React, { useState } from 'react';

function Counter() {
  // Declare a state variable 'count' and its updater function 'setCount'
  // Initialize 'count' with an initial value of 0
  const [count, setCount] = useState(0);

  // Function to handle the button click and update the state
  const incrementCount = () => {

    setCount(count + 1); // Update 'count' by adding 1 to its current value

  };

  return (

    <div>

      <p>You clicked {count} times</p>

      <button onClick={incrementCount}>
        Click me
      </button>

    </div>

  );
}

export default Counter;