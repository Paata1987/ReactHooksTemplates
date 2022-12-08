import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

//let renderCount = 1; //same  counter we can whrite using useREf

const UseRef = () => {
  //const [renderCount, setRenderCount] = useState(1);
  const [value, setValue] = useState(1);

  const preValue = useRef('');
  const renderCount = useRef(1);
  const inputRef = useRef(null);

  //func

  /* 
  useEffect(() => {
    setRenderCount((prev) => prev + 1);
  }, []); //without second parameter after brace }, []) usefecet is looping render
   */

  //same  counter we can whrite using useREf
  useEffect(() => {
    renderCount.current++;
    //console.log(inputRef.current.value);
    //renderCount++;
  });

  useEffect(() => {
    preValue.current = value;
  });

  const focus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      UseRef
      <h1>Render Counts: {renderCount.current}</h1>
      <h2>previous state: {preValue.current}</h2>
      <input
        ref={inputRef}
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
      />
      <button
        className="btn btn-success"
        onClick={focus}
      >
        {' '}
        focus{' '}
      </button>
    </div>
  );
};

export default UseRef;
