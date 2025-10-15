//App.js

import React from "react";
import Counter from "./useState_Counter";

const App = () => {

    return (

        <div style={{ textAlign: "center", marginTop: "30px" }}>
            {/* <h1>React Error Boundaries Example</h1>
            <ErrorBoundary>
                <BuggyComponent />
            </ErrorBoundary>  */}

            <Counter></Counter>

        </div>

    );

};

export default App;