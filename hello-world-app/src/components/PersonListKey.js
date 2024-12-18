import React from 'react'
import PersonKey from './PersonKey'

function PersonListKey() {

    const persons = [

        {
            id: 1,
            name: 'AAA',
            age: 10
        },

        {
            id: 2,
            name: 'BBB',
            age: 20
        },

        {
            id: 3,
            name: 'CCC',
            age: 30
        }
    ]

    const personList = persons.map(person => <PersonKey mykey={person.id} myperson={person} />)

    return <div>{personList}</div>


}

export default PersonListKey