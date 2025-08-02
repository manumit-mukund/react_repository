import React from 'react'

function PersonListConstMap() {

    const persons = [

        {
            id: 1,
            name: 'A',
            age: 10
        },

        {
            id: 2,
            name: 'B',
            age: 20
        },

        {
            id: 3,
            name: 'C',
            age: 30
        }
    ]

    const personList = persons.map(person => (

        <h2>
            {person.id}, {person.name}, {person.age}
        </h2>
    ))

    return <div>{personList}</div>

}

export default PersonListConstMap