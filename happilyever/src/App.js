import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register.js";
import NavBar from "./NavBar.js";
import WelcomePage from "./components/WelcomePage";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <NavBar />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route exact path="/" component={WelcomePage} />
      </Router>
    </>
  );
}

export default App;
