import React from 'react'

function Person({ myperson }) {

    return (

        <h2>{myperson.id}, {myperson.name}, {myperson.age}</h2>

    )
}

export default Person