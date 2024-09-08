import React, { Component } from 'react';

class ClassClick extends Component {

    clickHandler() {

        console.log('Buton clicked from class')
    }

    render() {

        return (
            <div>
                <button onClick={this.clickHandler}>ClickClass</button>
            </div>
        )
    }
}

export default ClassClick