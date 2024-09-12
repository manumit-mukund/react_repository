import React from 'react';
//import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GreetFunction, GreetConst, WelcomeClass, CreateElementUsingJSX, 
  CreateElementByReturn, GreetProps, GreetDestructureProps, GreetConstDestructureProps, WelcomeClassProps, MessageClass, 
  CounterClass, CounterClassPropsIncrementFive, CounterClassPrevState, FunctionClick, ClassClick, 
  EventBindClass, EventBindClassArrowFunction, ParentComponent, UserGreetingIfElse, 
  UserGreetingIfElseSecondMethod, UserGreetingIfElseTernaryMethod, UserGreetingIfElseShortCircuit,
  Inline, Home, Layout } from './components/pages';


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
          <Route path="GreetProps1" element={<GreetProps name="Ram1" heroName='God Ram1'><button>Action</button> </GreetProps>} />
          <Route path="GreetDestructureProps" element={<GreetDestructureProps name="Ram2" heroName='God Ram2'></GreetDestructureProps>} />
          <Route path="GreetConstDestructureProps" element={<GreetConstDestructureProps name="Ram3" heroName='God Ram3'></GreetConstDestructureProps>} />
          <Route path="WelcomeClassProps" element={<WelcomeClassProps name="Ram4" heroName='God Ram4'><button>Acrion</button> </WelcomeClassProps>} />
          <Route path="MessageClass" element={<MessageClass />} />
          <Route path="CounterClass" element={<CounterClass />} />
          <Route path="CounterClassPropsIncrementFive" element={<CounterClassPropsIncrementFive />} />
          <Route path="CounterClassPrevState" element={<CounterClassPrevState />} />
          <Route path="FunctionClick" element={<FunctionClick />} />
          <Route path="ClassClick" element={<ClassClick />} />
          <Route path="EventBindClass" element={<EventBindClass />} />
          <Route path="EventBindClassArrowFunction" element={<EventBindClassArrowFunction />} />
          <Route path="ParentComponent" element={<ParentComponent />} />
          <Route path="UserGreetingIfElse" element={<UserGreetingIfElse />} />
          <Route path="UserGreetingIfElseSecondMethod" element={<UserGreetingIfElseSecondMethod />} />
          <Route path="UserGreetingIfElseTernaryMethod" element={<UserGreetingIfElseTernaryMethod />} />
          <Route path="UserGreetingIfElseShortCircuit" element={<UserGreetingIfElseShortCircuit />} />
          <Route path="Inline" element={<Inline />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );

}

export default App;
