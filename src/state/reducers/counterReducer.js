// initial state
import * as types from '../actions/actionTypes';
const initialState = {
  value: 0,
}

const reducer = ( state = initialState, action) => {
  switch (action.type) {
    case types.COUNTER_INCREMENT:
      return { ...state, value: state.value + 1 }
    case types.COUNTER_DECREMENT:
      return { ...state, value: state.value - 1 }
    default:
      return state
  }
}
export default reducer