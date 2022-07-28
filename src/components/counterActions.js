import React from "react";  
import { useDispatch } from 'react-redux'
import { decrement, increment } from '../state/counterSlice'

const CounterActions = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
}

export default CounterActions;