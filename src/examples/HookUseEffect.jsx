import React from 'react';
import { useState, useEffect } from 'react';

const HookUseEffect = () => {
  const [type, setType] = useState();
  //const [ data,  setData] = useState();
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });

  //api

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`).then((res) =>
      res.json()
    );
    //.then(console.log('Hook'));
    //.then((json) => setData(json));
  }, [type]);

  //mouse movement coordinates

  const mouseMoveHandler = (e) => {
    setPos({
      x: e.clientX,
      y: e.clientY,
    });
  };

  useEffect(() => {
    console.log('componentDidMount');
    window.addEventListener('mousemove', mouseMoveHandler);
    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
    };
  });

  const todos = () => {
    setType('todos');
  };
  const posts = () => {
    setType('posts');
  };
  const users = () => {
    setType('users');
  };

  return (
    <div>
      HookUseEffect
      <h1>Recourse: {type} </h1>
      <button onClick={users}>Users</button>
      <button onClick={todos}>Todos</button>
      <button onClick={posts}>Posts</button>
      {/* <pre>{JSON.stringify(data, null, 2)} </pre> */}
      <pre>{JSON.stringify(pos, null, 2)} </pre>
    </div>
  );
};

export default HookUseEffect;
