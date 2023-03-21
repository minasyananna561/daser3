import React, { useState, useEffect } from 'react';
import style from './index.module.css'
export let Example=()=> {
  const [count, setCount] = useState(0);

  
  useEffect(() => {
    document.title = `Դուք սեղմել եք ${count} անգամ`;
  });

  return (
    <div className={style.example}>
      <p>Դուք սեղմել եք {count} անգամ</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
