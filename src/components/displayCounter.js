import React from 'react';

const CounterDisplay = (props) => {
  const { counter } = props;
  
  return (
    <div>
      <h1>Counter value = {counter}</h1>
    </div>
  );
}

export default CounterDisplay;