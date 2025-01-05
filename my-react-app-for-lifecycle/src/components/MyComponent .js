import React, { Component } from 'react';

class MyComponent extends Component {

    componentDidMount() {

        setTimeout(() => {

            console.log('Data loaded!');

        }, 1000);

    }

    render() {

        return <div>Hello, React!</div>;

    }

}

export default MyComponent;