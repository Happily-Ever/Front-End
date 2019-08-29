import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register.js";
import NavBar from "./components/NavBar.js";
import WelcomePage from "./components/WelcomePage";
import CssBaseline from "@material-ui/core/CssBaseline";
import CouplesList from "./components/CouplesList.js";
import WeddingForm from "./components/WeddingForm.js";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <PrivateRoute exact path="/add" component={WeddingForm} />
          <Route exact path="/weddings" component={CouplesList} />
          <Route path="/" component={WelcomePage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
