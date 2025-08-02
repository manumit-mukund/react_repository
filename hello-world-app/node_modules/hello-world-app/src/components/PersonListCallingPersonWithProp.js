import React from 'react'
import PersonWithProp from './PersonWithProp'

function PersonListCallingPersonWithProp() {

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

    const personList = persons.map(person => <PersonWithProp myperson={person} />)

    return <div>{personList}</div>


}

export default PersonListCallingPersonWithProp