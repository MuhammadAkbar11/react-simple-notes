import React, { Component } from "react";

export class Dashboard extends Component {
  render() {
    return (
      <div>
        <p>Dashboard Page</p>
        <button className="btn btn-blue">Go to Login</button>
        <button>Go to Register</button>
      </div>
    );
  }
}

export default Dashboard;
