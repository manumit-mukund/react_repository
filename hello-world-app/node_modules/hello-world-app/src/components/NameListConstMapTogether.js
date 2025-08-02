import React from 'react'

function NameListConstMapTogether() {

    const names = ['N5', 'N6', 'N7']
    
    const nameList = names.map(name => <h2>{name}</h2>)

    return (

        <div>{nameList}</div>

    )
}

export default NameListConstMapTogether