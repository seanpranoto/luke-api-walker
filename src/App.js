import React from 'react';
import './App.css';
import { Router } from "@reach/router";
import Home from "./components/Home";
import Form from './components/Form';
import NotFound from "./components/NotFound";
import People from "./components/People";


function App() {
  return (
    <div className="container">
      <Form/>
      <Router>
        <Home path="/:search/:id" />
        <NotFound path="/obiwan"/>
        <People path="/people/:id"/>
      </Router>
    </div>
  );
}

export default App;