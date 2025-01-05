import React, { Component } from 'react';

class TimerComponent extends Component {

    constructor() {

        super();
        this.state = {
            seconds: 0,
        };
        this.timer = null; // Initialize the timer

    }

    // When the component mounts, start the timer
    componentDidMount() {

        this.timer = setInterval(() => {

            this.setState({ seconds: this.state.seconds + 1 });

        }, 1000); // Update every 1 second (1000 milliseconds)
    }

    // When the component unmounts, clear the timer to prevent memory leaks
    componentWillUnmount() {

        clearInterval(this.timer);

    }

    render() {

        return (

            <div>
                <h1>Timer Component</h1>
                <p>Elapsed Time: {this.state.seconds} seconds</p>
            </div>

        );

    }
}

export default TimerComponent;