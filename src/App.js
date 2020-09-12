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
    confrimPassword:""
  });
  return(
    <>
    <Form state={state} setState={setState}/>
    <Value state={state}/>
    </>
  );
}

export default App;