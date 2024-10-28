import React from 'react'
import Person from './Person'

function PersonList() {

    const persons = [

        {
            id: 1,
            name: 'AA',
            age: 10
        },

        {
            id: 2,
            name: 'BB',
            age: 20
        },

        {
            id: 3,
            name: 'CC',
            age: 30
        }
    ]

    const personList = persons.map(person => <Person myperson={person} />)

    return <div>{personList}</div>


}

export default PersonList