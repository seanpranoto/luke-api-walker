import React, { useState } from 'react';
import './App.css';
import Tabs from "./components/Form";
import Content from "./components/Value";


function App() {
  const [state, setState] = useState();
  return (
    <div>
      <Tabs setState={setState} />
      <Content state={state} />
    </div>
  );
}

export default App;