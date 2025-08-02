import React from 'react'
import '../css/myStyle.css'

function StylesheetWithProp(props) {

    let className = props.primary ? 'primary1' : 'primary2'

    return (

        <div>
            <h1 className={`${className} font-xl`}>Stylesheet</h1>
        </div>
    )
}

export default StylesheetWithProp