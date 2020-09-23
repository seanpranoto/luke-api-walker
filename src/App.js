import React, { useState } from 'react';
import './App.css';
import Form from "./components/Form";
import Content from "./components/Value";


function App() {
  const [pokemons , setPokemons] = useState([]);
  return (
    <div >
      <Form setPokemons={setPokemons}/>
      <Content pokemons={pokemons}/>
    </div>
  );
}

export default App;