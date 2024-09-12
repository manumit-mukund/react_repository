import React from 'react'

function NameList3() {

    const names = ['Ratnesh3', 'Rajiv3', 'Navin3']
    
    const nameList = names.map(name => <h2>{name}</h2>)

    return (

        <div>{nameList}</div>

    )
}

export default NameList3