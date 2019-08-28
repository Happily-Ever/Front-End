import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import NavBar from "./components/NavBar.js";
import CouplesList from "./components/CouplesList.js";

function App() {
  return (
    <Router>
      <NavBar/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
      <Route path="/weddings" component={CouplesList}/>
    </Router>
  );
}

export default App; 