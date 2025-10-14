//App.js

import React from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import BuggyComponent from "./components/BuggyComponent";

const App = () => {
    return (
        <div style={{ textAlign: "center", marginTop: "30px" }}>
            <h1>React Error Boundaries Example</h1>
            <ErrorBoundary>
                <BuggyComponent />
            </ErrorBoundary>
        </div>
    );
};

export default App;