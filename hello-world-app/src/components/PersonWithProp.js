import React from 'react'

function PersonWithProp({ myperson }) {

    return (

        <h2>{myperson.id}, {myperson.name}, {myperson.age}</h2>

    )
}

export default PersonWithProp