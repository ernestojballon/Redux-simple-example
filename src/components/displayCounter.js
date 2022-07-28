import React from 'react';
import { useSelector } from 'react-redux'

const CounterDisplay = () => {
  const counter = useSelector((state) => state.counter.value)
  return (
    <div>
      <h1>Counter value = {counter}</h1>
    </div>
  );
}

export default CounterDisplay;