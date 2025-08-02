import { Outlet, Link } from "react-router-dom";

const Layout = () => {

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/GreetFunction">GreetFunction</Link>
          </li>
          <li>
            <Link to="/GreetConst">GreetConst</Link>
          </li>
          <li>
            <Link to="/WelcomeClass">WelcomeClass</Link>
          </li>
          <li>
            <Link to="/CreateElementUsingJSX">CreateElementUsingJSX</Link>
          </li>
          <li>
            <Link to="/CreateElementUsingConstReturn">CreateElementUsingConstReturn</Link>
          </li>
          <li>
            <Link to="/GreetProps">GreetProps</Link>
          </li>
          <li>
            <Link to="/GreetProps1">GreetProps1</Link>
          </li>
          <li>
            <Link to="/GreetDestructureProps">GreetDestructureProps</Link>
          </li>
          <li>
            <Link to="/GreetConstDestructureProps">GreetConstDestructureProps</Link>
          </li>
          <li>
            <Link to="/WelcomeClassProps">WelcomeClassProps</Link>
          </li>
          <li>
            <Link to="/WelcomeClassDestructureProps">WelcomeClassDestructureProps</Link>
          </li>
          <li>
            <Link to="/MessageClass">MessageClass</Link>
          </li>
          <li>
            <Link to="/CounterClass">CounterClass</Link>
          </li>
          <li>
            <Link to="/CounterClassIncrementFive">CounterClassIncrementFive</Link>
          </li>
          <li>
            <Link to="/CounterClassIncrementFivePrevState">CounterClassIncrementFivePrevState</Link>
          </li>
          <li>
            <Link to="/CounterClassProps">CounterClassProps</Link>
          </li>
          <li>
            <Link to="/FunctionClick">FunctionClick</Link>
          </li>
          <li>
            <Link to="/ClassClick">ClassClick</Link>
          </li>
          <li>
            <Link to="/EventBindClass">EventBindClass</Link>
          </li>
          <li>
            <Link to="/EventBindClassArrowFunction">EventBindClassArrowFunction</Link>
          </li>
          <li>
            <Link to="/EventBindClassArrowFunctionInClass">EventBindClassArrowFunctionInClass</Link>
          </li>
          <li>
            <Link to="/EventBindClassConstructor">EventBindClassConstructor</Link>
          </li>
          <li>
            <Link to="/ParentComponent">ParentComponent</Link>
          </li>
          <li>
            <Link to="/UserGreetingIfElseMultipleReturns">UserGreetingIfElseMultipleReturns</Link>
          </li>
          <li>
            <Link to="/UserGreetingIfElseOneReturn">UserGreetingIfElseOneReturn</Link>
          </li>
          <li>
            <Link to="/UserGreetingIfElseTernaryMethod">UserGreetingIfElseTernaryMethod</Link>
          </li>
          <li>
            <Link to="/UserGreetingIfElseShortCircuit">UserGreetingIfElseShortCircuit</Link>
          </li>
          <li>
            <Link to="/NameListConst">NameListConst</Link>
          </li>
          <li>
            <Link to="/NameListConstMap">NameListConstMap</Link>
          </li>
          <li>
            <Link to="/NameListConstMapTogether">NameListConstMapTogether</Link>
          </li>
          <li>
            <Link to="/NameListKeyIndex">NameListKeyIndex</Link>
          </li>
          <li>
            <Link to="/PersonListCallingPersonWithProp">PersonListCallingPersonWithProp</Link>
          </li>
          <li>
            <Link to="/PersonListConstMap">PersonListConstMap</Link>
          </li>
          <li>
            <Link to="/PersonListKey">PersonListKey</Link>
          </li>
          <li>
            <Link to="/Stylesheet">Stylesheet</Link>
          </li>
          <li>
            <Link to="/Inline">Inline</Link>
          </li>
          <li>
            <Link to="/ProfilerTest">ProfilerTest</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>

  )
};

export default Layout;