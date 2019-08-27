import React from "react";

function App() {
  return (
    <Router>
      <h1>Dummy Component</h1>
      <Link to="/login">Login Test</Link>
      <br />
      <Link to="/register">Register Test</Link>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Router>
  );
}

export default App;
