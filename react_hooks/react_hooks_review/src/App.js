import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

// function countInitial() {
//   console.log('run function')
//   return 4
// }

function App() {
  // to pass in the state we can set state or pass a function in useState
  // const [count, setCount] = useState(4);
  // const [theme, setTheme] = useState('blue)
  // const [count, setCount] = useState(() => countInitial);
  const [state, setState] = useState({ count: 4, theme: 'blue' });
  const count = state.count
  const theme = state.theme

  function decrementCount(){
    // setCount(pervCount => pervCount - 1)
    setState(prevState => {
      return { ...prevState, count: prevState.count - 1 }
    })
  }

  function incrementCount() {
    // setCount(pervCount => pervCount +1 )
    setState(prevState => {
      return { ...prevState, count: prevState.count + 1 }
    })
    // setTheme('red')
  }

  return (
    <div className="App">
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}

export default App;