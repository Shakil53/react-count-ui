import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(50);
  const increseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
  
  return (
    <div className="counter">
      <h1>Count Start:{count} </h1>
      <button onClick={increseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
      
    </div>
  ) 
}

export default App;
