import React from 'react';
//import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GreetFunction, GreetConst, WelcomeClass, CreateElementUsingJSX, CreateElementByReturn, GreetProps, Inline, Home, Layout } from './components/pages';


function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="GreetFunction" element={<GreetFunction />} />
          <Route path="GreetConst" element={<GreetConst />} />
          <Route path="WelcomeClass" element={<WelcomeClass />} />
          <Route path="CreateElementUsingJSX" element={<CreateElementUsingJSX />} />
          <Route path="CreateElementByReturn" element={<CreateElementByReturn />} />
          <Route path="GreetProps" element={<GreetProps name="Ram" heroName='God Ram'><p>This is children props.</p> </GreetProps>} />
          <Route path="GreetProps1" element={<GreetProps name="Ram1" heroName='God Ram1'><button>Acrion</button> </GreetProps>} />
          <Route path="Inline" element={<Inline />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );

}

export default App;
