import * as types from './actionTypes';

export const counterIncrement = () => {
  return {
    type: types.COUNTER_INCREMENT,
  }
};

export const counterDecrement = () => {
  return {
    type: types.COUNTER_DECREMENT
  }
};