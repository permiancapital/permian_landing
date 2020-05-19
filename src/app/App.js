import React from "react";
import { Router, Link } from "@reach/router";
import logo from "./logo.svg";
import Home from "./Home";
let Dash = () => <div>Dash</div>;

function App() {
  return (
    <Router>
      <Home path="/" />
      <Dash path="dashboard" />
    </Router>
  );
}

export default App;
