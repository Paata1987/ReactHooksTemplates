import React from 'react';
import { useState } from 'react';

const functionInitialCounter = () => {
  //console.log('some calculation');
  return Math.trunc(Math.random() * 20);
};
const State = () => {
  const [counter, setCounter] = useState(functionInitialCounter);
  const increment = () => {
    setCounter(counter + 1);
  };

  const [state, setState] = useState({
    title: counter,
    date: Date.now(),
  });

  const decrement = () => {
    setCounter(counter - 1);
  };

  const updateTitle = () => {
    setState((prev) => {
      return {
        ...prev,
        title: 'changed title',
      };
    });
  };

  return (
    <div className="state">
      Hook State
      <h1>Counter: {counter} </h1>
      <button
        className="btn btn-success"
        onClick={increment}
      >
        Add
      </button>
      <button
        className="btn btn-danger"
        onClick={decrement}
      >
        Del
      </button>
      <button
        className="btn btn-default"
        onClick={updateTitle}
      >
        change
      </button>
      <pre> {JSON.stringify(state, null, 2)} </pre>
    </div>
  );
};

export default State;
