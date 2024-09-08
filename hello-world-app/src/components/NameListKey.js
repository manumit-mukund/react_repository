import React from 'react'

function NameListKey() {

    const names = ['RatneshK', 'RajivK', 'NavinK', 'RajivK']
    const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)

    return (

        <div>
            <h2>{nameList}</h2>
        </div>
    )
}

export default NameListKey