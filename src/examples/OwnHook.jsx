import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

//simple hook example uselogger
/* function useLogger(value) {
  useEffect(() => {
    console.log('value changed: ', value);
  }, [value]);
} */

//own base hook n2
function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const clear = () => setValue('');
  return {
    bind: {
      value,
      onChange,
    },
    value,
    clear,
  };
}

////
const OwnHook = () => {
  //simply to use own hook useLogger
  //useLogger(name);

  const name = useInput('');
  const lastName = useInput('');

  return (
    <div>
      <input
        {...name.bind}
        /* value={name.value}
        onChange={name.onChange} */
      />
      <button
        className="btn btn-warning"
        onClick={() => {
          name.clear();
        }}
      >
        clear
      </button>
      <h1> {name.value} </h1>
      <hr />
      <input
        {...lastName.bind}
        /* value={lastName.value}
        onChange={lastName.onChange} */
      />
      <button
        className="btn btn-warning"
        onClick={() => {
          lastName.clear();
        }}
      >
        clear
      </button>
      <h1> {lastName.value} </h1>
      <hr />
    </div>
  );
};

export default OwnHook;
