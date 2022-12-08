import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function UseCallBackItemList({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const newItems = getItems();
    setItems(newItems);
  }, [getItems]);

  return (
    <div>
      <ul>
        {items.map((i) => (
          <li key={i}> {i} </li>
        ))}
      </ul>
    </div>
  );
}

export default UseCallBackItemList;
