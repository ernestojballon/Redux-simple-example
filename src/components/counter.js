import React,{ useState } from 'react';
import CounterDisplay from './displayCounter';
import CounterActions from './counterActions';

const Counter = (props) => {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  }
  const decrement = () => {
    setCounter(counter - 1);
  }
  return (
    <div>
      <h1>Counter</h1>
      <CounterActions increment={increment} decrement={decrement}></CounterActions>
      <CounterDisplay counter={counter}></CounterDisplay>
    </div>
  );
}

export default Counter;//import react
