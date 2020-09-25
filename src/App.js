import React from 'react';
import './App.css';
import { Router } from "@reach/router";
import Home from "./components/Home";


function App() {
  return (
    <div className="container">
      <Router>
        <Home path="/home" />
        <Home path="/:item" />
        <Home path="/:item/:color/:bgColor" />
      </Router>
    </div>
  );
}

export default App;