import React from 'react';
import './App.css';
import MyComponent from "./components/MyComponents"

function App() {
  return (
    <div className="App">
      <MyComponent firstName={"Jane"} lastName={"Doe"} age={45} color={"blonde"}/>
      <MyComponent firstName={"Pranoto"} lastName={"Sean"} age={21} color={"back"}/>
      <MyComponent firstName={"DB"} lastName={"Mongo"} age={22} color={"red"}/>
    </div>
  );
}

export default App;
