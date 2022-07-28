import React from "react";  
import { useDispatch } from 'react-redux'
import { counterDecrement, counterIncrement } from '../state/actions/counterActions'

const CounterActions = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={() => dispatch(counterDecrement())}>-</button>
      <button onClick={() => dispatch(counterIncrement())}>+</button>
    </div>
  );
}

export default CounterActions;