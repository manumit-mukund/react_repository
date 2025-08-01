import React from 'react';
//import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  GreetFunction, GreetConst, WelcomeClass, CreateElementUsingJSX,
  CreateElementUsingConstReturn, GreetProps, GreetDestructureProps, GreetConstDestructureProps, 
  WelcomeClassProps, WelcomeClassDestructureProps, MessageClass,
  CounterClass, CounterClassIncrementFive, CounterClassIncrementFivePrevState, FunctionClick, ClassClick,
  EventBindClass, EventBindClassArrowFunction, EventBindClassArrowFunctionInClass,
  EventBindClassConstructor, ParentComponent, UserGreetingIfElse,
  UserGreetingIfElseSecondMethod, UserGreetingIfElseTernaryMethod, UserGreetingIfElseShortCircuit,
  NameList1, NameList2, NameList3, NameListKeyIndex, PersonList, PersonList1, PersonListKey,
  Stylesheet,
  Inline, Home, Layout, ProfilerTest
} from './components/pages';


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
          <Route path="CreateElementUsingConstReturn" element={<CreateElementUsingConstReturn />} />
          <Route path="GreetProps" element={<GreetProps name="Rajiba" heroName='Java Champion'><p>Child1-1</p><p>Child1-2</p> </GreetProps>} />
          <Route path="GreetProps1" element={<GreetProps name="Lakhan" heroName='God Lakhan'><button>Action</button> </GreetProps>} />
          <Route path="GreetDestructureProps" element={<GreetDestructureProps name="Bharat" heroName='God Bharat'></GreetDestructureProps>} />
          <Route path="GreetConstDestructureProps" element={<GreetConstDestructureProps name="Shatrughan" heroName='God Shatrughan'></GreetConstDestructureProps>} />
          <Route path="WelcomeClassProps" element={<WelcomeClassProps name="Ramesh" heroName='Kumar'><button>WelcomeClas Action</button> </WelcomeClassProps>} />
          <Route path="WelcomeClassDestructureProps" element={<WelcomeClassDestructureProps name="Ramesh1" heroName='Kumar1'><button>WelcomeClassDestructureProps Action</button> </WelcomeClassDestructureProps>} />
          <Route path="MessageClass" element={<MessageClass />} />
          <Route path="CounterClass" element={<CounterClass />} />
          <Route path="CounterClassIncrementFive" element={<CounterClassIncrementFive />} />
          <Route path="CounterClassIncrementFivePrevState" element={<CounterClassIncrementFivePrevState />} />
          <Route path="FunctionClick" element={<FunctionClick />} />
          <Route path="ClassClick" element={<ClassClick />} />
          <Route path="EventBindClass" element={<EventBindClass />} />
          <Route path="EventBindClassArrowFunction" element={<EventBindClassArrowFunction />} />
          <Route path="EventBindClassArrowFunctionInClass" element={<EventBindClassArrowFunctionInClass />} />
          <Route path="EventBindClassConstructor" element={<EventBindClassConstructor />} />
          <Route path="ParentComponent" element={<ParentComponent />} />
          <Route path="UserGreetingIfElse" element={<UserGreetingIfElse />} />
          <Route path="UserGreetingIfElseSecondMethod" element={<UserGreetingIfElseSecondMethod />} />
          <Route path="UserGreetingIfElseTernaryMethod" element={<UserGreetingIfElseTernaryMethod />} />
          <Route path="UserGreetingIfElseShortCircuit" element={<UserGreetingIfElseShortCircuit />} />
          <Route path="NameList1" element={<NameList1 />} />
          <Route path="NameList2" element={<NameList2 />} />
          <Route path="NameList3" element={<NameList3 />} />
          <Route path="NameListKeyIndex" element={<NameListKeyIndex />} />
          <Route path="PersonList" element={<PersonList />} />
          <Route path="PersonList1" element={<PersonList1 />} />
          <Route path="PersonListKey" element={<PersonListKey />} />
          <Route path="Stylesheet" element={<Stylesheet primary={false} />} />
          <Route path="Inline" element={<Inline />} />
          <Route path="ProfilerTest" element={<ProfilerTest />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );

}

export default App;
