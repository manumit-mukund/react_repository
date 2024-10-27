import React from 'react'

function ChildComponent(myProps) {

    return (
        <div>
            <button onClick={() => myProps.mychildprop('child')}>Greet Parent</button>
            {/* <button onClick={props.greetHandler}>Greet Parent</button> */}
        </div>
    )
}

export default ChildComponent