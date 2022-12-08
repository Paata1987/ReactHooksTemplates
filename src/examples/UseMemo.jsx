import React, { useState } from 'react';
import { useMemo } from 'react';
import { useEffect } from 'react';

function complexCompute(num) {
  let i = 0;
  while (i > 1000000000) i++;
  return num * 2;
}

const UseMemo = () => {
  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false);

  const styles = useMemo(
    () => ({
      color: colored ? 'darkred' : 'black',
    }),
    [colored]
  );
  //const computed = complexCompute(number); // rendering whole component even change only style
  //working to  sslow. /// to prevent this state use hook " useMemo "

  const computed = useMemo(() => {
    return complexCompute(number);
  }, [number]); //this optimization lets styles change state quickly  withouth rendering whole component

  //another use of hook "useMemo"

  useEffect(() => {
    //console.log('styles changed'); //when we change counter state styles also change state
    // to avoid this behavio need to  use usememo hook with styles
  }, [styles]);

  return (
    <div>
      <h1 style={styles}>countable state {computed} </h1>
      <button
        className="btn btn-success"
        onClick={() => setNumber((prev) => prev + 1)}
      >
        ADD
      </button>
      <button
        className="btn btn-danger"
        onClick={() => setNumber((prev) => prev - 1)}
      >
        DEL
      </button>
      <button
        className="btn btn-warningr"
        onClick={() => setColored((prev) => !prev)}
      >
        CHANGE
      </button>
    </div>
  );
};

export default UseMemo;
