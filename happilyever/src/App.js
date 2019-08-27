import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Login.js ";
import Register from "./Register.js";

function App() {
  return (
    <Router>
      <h1>Dummy Component</h1>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
    </Router>
  );
}

export default App; 