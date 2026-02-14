import App1 from './App1';
import App2 from './App2';

function App() {

    // Using array destructuring here to 
    // assign initial value 0 to click 
    // and a reference to the function
    // that updates click to setClick
    return (

        <div>

            <App1 />

            <App2 />

        </div>

    );
}

export default App;