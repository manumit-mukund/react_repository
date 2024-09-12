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
            <Link to="/CreateElementByReturn">CreateElementByReturn</Link>
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
            <Link to="/MessageClass">MessageClass</Link>
          </li>
          <li>
            <Link to="/CounterClass">CounterClass</Link>
          </li>
          <li>
            <Link to="/CounterClassPropsIncrementFive">CounterClassPropsIncrementFive</Link>
          </li>
          <li>
            <Link to="/CounterClassPrevState">CounterClassPrevState</Link>
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
            <Link to="/ParentComponent">ParentComponent</Link>
          </li>
          <li>
            <Link to="/UserGreetingIfElse">UserGreetingIfElse</Link>
          </li>
          <li>
            <Link to="/UserGreetingIfElseSecondMethod">UserGreetingIfElseSecondMethod</Link>
          </li>
          <li>
            <Link to="/UserGreetingIfElseTernaryMethod">UserGreetingIfElseTernaryMethod</Link>
          </li>
          <li>
            <Link to="/UserGreetingIfElseShortCircuit">UserGreetingIfElseShortCircuit</Link>
          </li>
          <li>
            <Link to="/Inline">Inline</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>

  )
};

export default Layout;