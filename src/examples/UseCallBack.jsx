import { useState } from 'react';
import React from 'react';
import UseCallBackItemList from './UseCallBackItemList';
import { useCallback } from 'react';

export const UseCallBack = () => {
  const [count, setCount] = useState(1);
  const [colored, setColored] = useState(false);

  const styles = { color: colored ? 'darkred' : 'black' };

  const generateItemsFromAPI = useCallback(() => {
    return new Array(count).fill('').map((i) => `Element ${i + 1}`);
  }, [count]);

  return (
    <div>
      <h1 style={styles}>Ellements count: {count} </h1>
      <button
        className="btn btn-success"
        onClick={() => setCount((prev) => prev + 1)}
      >
        ADD
      </button>
      {/* <button
        className="btn btn-danger"
        onClick={() => setCount((prev) => prev - 1)}
      >
        DEL
      </button> */}

      <button
        className="btn btn-warningr"
        onClick={() => setColored((prev) => !prev)}
      >
        CHANGE
      </button>

      <UseCallBackItemList getItems={generateItemsFromAPI} />
    </div>
  );
};

export default UseCallBack;
