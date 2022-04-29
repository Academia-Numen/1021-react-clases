import { useState } from "react";

function Counter() {

  const [counter, setCounter] = useState(0);

  return (
    <>
      <span>{counter}</span>

      <button onClick={() => setCounter(prevState => prevState + 1)}>+</button>
      <button onClick={() => setCounter(prevState => prevState - 1)}>-</button>
      <button onClick={() => setCounter(0)}>Reset</button>
    </>
  )
}

export default Counter;