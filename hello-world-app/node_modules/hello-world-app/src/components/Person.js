import React from 'react'

function Person({ myperson }) {


    return (

        <div><h2>{myperson.id}, {myperson.name}, {myperson.age}</h2></div>

    )
}

export default Person