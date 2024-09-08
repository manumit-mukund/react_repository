import React from 'react'

function NameList2() {

    const names = ['Ratnesh2', 'Rajiv2', 'Navin2']

    return (

        <div>
            {
                names.map(name => <h2>{name}</h2>)
            }
        </div>

    )
}

export default NameList2