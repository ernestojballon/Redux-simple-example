import React from "react";  

const CounterActions = (props) => {
  const { increment, decrement } = props;

  return (
    <div>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default CounterActions;