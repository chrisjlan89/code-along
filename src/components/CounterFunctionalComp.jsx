import React, { useState } from "react";

const CounterComp = () => {
  const [state, setState] = useState({
    counter: 0,
    name: "Sam",
  });

  const increment = () => {
    setState({
      ...state,
      counter: state.counter + 1,
    });
  };

  const decrement = (ev) => {
    setState({
      ...state,
      counter: state.counter - 1,
    });
  };

  const reset = () => {
    setState({
      ...state,
      counter: 0,
    });
  };

  return (
    <div className="counter-area">
      <p> Counter Value: {state.counter} </p>
      <button onClick={() => increment()}>Increment Counter </button>
      <button onClick={(e) => decrement(e)}>Decrement Counter</button>
      <button onClick={() => reset()}>Reset Counter</button>
    </div>
  );
};

export default CounterComp;
