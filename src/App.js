import React from 'react';
import './App.css';
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Subcontent from "./components/Subcontent";
import Advertisement from "./components/Advertisement";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Main>
        <Subcontent />
        <Subcontent />
        <Subcontent />
        <Advertisement />
      </Main>
    </div>
  );
}

export default App;
