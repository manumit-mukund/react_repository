import React from 'react'

function NameListConstMap() {

    const names = ['N3', 'N4', 'N5']

    return (

        <div>
            {
                names.map(name => <h2>{name}</h2>)
            }
        </div>

    )
}

export default NameListConstMap