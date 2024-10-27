import React from 'react'

function ChildComponent(myProps) {

    return (

        <div>

            <button onClick={() => myProps.mychildprop('your children')}>Greet Parent</button>

        </div>

    )
}

export default ChildComponent