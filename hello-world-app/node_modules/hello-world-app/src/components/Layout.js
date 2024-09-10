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
            <Link to="/WelcomeClassProps">WelcomeClassProps</Link>
          </li>
          <li>
            <Link to="/MessageClass">MessageClass</Link>
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