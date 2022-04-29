import { useReducer } from "react";
import reducer, { ACTIONS } from "../reducers/reducer";

function CounterWithReducer() {

  const [counter, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <span>{counter}</span>

      <button onClick={() => dispatch({ type: ACTIONS.INCREMENT, payload: 5 })}>+</button>
      <button onClick={() => dispatch({ type: ACTIONS.DECREMENT, payload: 10 })}>-</button>
      <button onClick={() => dispatch({ type: ACTIONS.RESET })}>Reset</button>
    </>
  )
}

export default CounterWithReducer;