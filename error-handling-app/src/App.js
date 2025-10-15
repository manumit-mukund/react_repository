//App.js

import React from "react";
import Counter from "./useState_Counter";
import ErrorBoundary from "./components/ErrorBoundary";
import BuggyComponent from "./components/BuggyComponent";

const App = () => {

    return (

        <div style={{ textAlign: "center", marginTop: "30px" }}>

            <div>
                <h1>React Error Boundaries Example</h1>
                <ErrorBoundary>
                    <BuggyComponent />
                </ErrorBoundary>
            </div>

            <div>
                <Counter></Counter>
            </div>


        </div>

    );

};

export default App;