import React from 'react';
import './App.css';
import Main from "./components/Main";
import StyledBox from "./components/StyledComponents";


function App() {
  return (
    <div className="App">
      <StyledBox bgColor="#6aa84f" height="80px" width="905px" margin="0 0 15px 0" />
      <StyledBox bgColor="#6fa8dc" height="370px" width="200px" display="inline-block" margin="0 15px 0 0" />
      <Main>
        <StyledBox bgColor="#ffd966" margin="15px" display="inline-block" width="200px" height="300px" />
        <StyledBox bgColor="#ffd966" margin="15px" display="inline-block" width="200px" height="300px" />
        <StyledBox bgColor="#ffd966" margin="15px" display="inline-block" width="200px" height="300px" />
        <StyledBox bgColor="#b4a7d6" height="80px" width="660px" margin="0 15px 15px 15px" />
      </Main>
    </div>
  );
}

export default App;
