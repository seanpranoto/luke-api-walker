import React, { useState } from 'react';
import './App.css';
import Form from "./components/Form";
import Content from "./components/Value";


function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <div>
      {
        tasks.map((task, i) => <Content task={task} setTasks={setTasks} i={i} tasks={tasks} />)
      }
      <Form tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;