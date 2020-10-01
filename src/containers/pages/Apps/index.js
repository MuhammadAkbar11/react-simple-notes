import React from "react";
import "../../../assets/scss/main.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Provider } from "react-redux";

import Dashboard from "../Dashboard";
import ReduxStore from "config/redux/store/Redux.store";
import Registrations from "../Auth/Registrations";
import Login from "../Auth/Login";

function App() {
  return (
    <Provider store={ReduxStore}>
      <Router>
        <>
          <Route path="/" exact component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/registration" component={Registrations} />
        </>
      </Router>
    </Provider>
  );
}

export default App;
