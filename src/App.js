import React, { useState } from 'react';
import './App.css';
import Form from "./components/Form";
import StyledBox from "./components/Value";


function App() {
  const [state, setState] = useState({
    array: []
  });
  return (
    <div className="App">
      <Form state={state} setState={setState} />
      {
        state.array.map(color => <StyledBox bgcolor={color} />)
      }
    </div>
  );
}

export default App;