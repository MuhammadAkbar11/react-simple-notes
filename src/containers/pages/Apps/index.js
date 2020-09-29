import React from "react";
import "../../../assets/scss/main.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Provider } from "react-redux";

import Dashboard from "../Dashboard";
import Login from "../Login";
import Register from "../Register";
import ReduxStore from "config/redux/store/Redux.store";

function App() {
  return (
    <Provider store={ReduxStore}>
      <Router>
        <>
          <Route path="/" exact component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </>
      </Router>
    </Provider>
  );
}

export default App;
