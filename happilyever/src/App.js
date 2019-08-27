import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./Login.js";
import Register from "./Register.js";
import NavBar from "./NavBar.js";

function App() {
  return (
    <Router>
      {/* <NavBar/> */}
      <h1>Dummy Component</h1>
      <Link to="/login">Login Test</Link><br/>
      <Link to="/register">Register Test</Link>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
    </Router>
  );
}

export default App; 