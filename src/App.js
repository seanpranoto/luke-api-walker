import React from 'react';
import './App.css';
import FormWrapper from "./components/FormWrapper";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";



function App() {
  return (
      <Wrapper>
        <Navbar />
        <FormWrapper />
      </Wrapper>
  );
}

export default App;