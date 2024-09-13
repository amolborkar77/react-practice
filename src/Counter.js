import React, { useState } from "react";
import { incremented, decremented } from "./store";
import { store } from "./store";

const Counter = () => {
  const [counter, setCounter] = useState(1);
  console.log(store.dispatch(incremented()));
  console.log(store.getState());

  return (
    <div>
      <span>{counter}</span>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;
