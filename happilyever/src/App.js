import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register.js";
import NavBar from "./components/NavBar.js";
import WelcomePage from "./components/WelcomePage";
import CssBaseline from "@material-ui/core/CssBaseline";
import CouplesList from "./components/CouplesList.js";
import WeddingForm from "./components/WeddingForm.js";

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <NavBar />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/add" component={WeddingForm} />
        <Route path="/weddings" component={CouplesList} />
        <Route exact path="/" component={WelcomePage} />
      </Router>
    </>
  );
}

export default App;
