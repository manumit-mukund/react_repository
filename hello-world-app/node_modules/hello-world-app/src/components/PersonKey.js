import React from 'react'

function PersonKey({ myperson, mykey }) {

    return (

        <h2>
            {mykey}  {myperson.id}, {myperson.name}, {myperson.age}
        </h2>

    )
}

export default PersonKey