import React, { useState } from 'react';
import './App.css';
import Value from "./components/Value";
import Form from "./components/Form";


function App() {
  const [state, setState]=useState({
    firstName:"", 
    lastName:"",
    email:"",
    password:"",
    confirmPassword:""
  });
  return(
    <div>
    <Form input={state} setInput={setState}/>
    <Value data={state}/>
    </div>
  );
}

export default App;