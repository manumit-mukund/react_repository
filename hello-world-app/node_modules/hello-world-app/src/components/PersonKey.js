import React from 'react'

function PersonKey({ person, key }) {

    return (

        <div>
            <h2>
            {key}  {person.id}, {person.name}, {person.age}
            </h2>
        </div>

    )
}

export default PersonKey