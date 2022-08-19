import './App.css';
import React, { useState } from 'react'
import Msg from './components/Message';
function App() {
  const [count, setCount] = useState(1);
  const [isMorning, setMorning] = useState(true)
  const [isDay, setDay] = useState("Night")
  return (
    <div className={`box ${isMorning ? "dayLight" : ''}`}>
      <Msg counter={count} />
      <button onClick={() => setCount(count + 1)}>ClickToIncrease</button>
      <button onClick={() => setMorning(!isMorning)} >Enter for Change</button>
    </div>
  );
}

export default App;
