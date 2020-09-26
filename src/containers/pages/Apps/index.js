import React from "react";
import "../../../assets/scss/main.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Dashboard from "../Dashboard";
import Login from "../Login";
import Register from "../Register";

function App() {
  return (
    <Router>
      <>
        <Route path="/" exact component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </>
    </Router>
  );
}

export default App;
