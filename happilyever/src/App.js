import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import NavBar from "./components/NavBar.js";
import CouplesList from "./components/CouplesList.js";
import WeddingForm from "./components/WeddingForm.js";

function App() {
  return (
    <Router>
      <NavBar/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
      <Route path="/add" component={WeddingForm}/>
      <Route path="/weddings" component={CouplesList}/>
    </Router>
  );
}

export default App; 