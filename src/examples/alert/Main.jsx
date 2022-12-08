import React from 'react';
import { useAlert } from './AlertContext';

const Main = () => {
  const { show } = useAlert();

  return (
    <>
      <button
        onClick={() => show(':::::::::: Very important message ::::::::::')}
        className="btn btn-success"
      >
        Show Alert!
      </button>
    </>
  );
};

export default Main;
