import React, { useState, useEffect } from 'react';

const LocalStorage = () =>{

    const [count, setCount] = useState(() => {
        const storedCount = localStorage.getItem('count');
        return storedCount !== null ? parseInt(storedCount) : 0;
      });

      useEffect(() => {
        localStorage.setItem('count', count);
      }, [count]);

      const incrementCount = () => {
        setCount(prevCount => prevCount + 1);
      };

      const resetCount = () => {
        setCount(0);
      };
    return (
        <>
        <h1>Count: {count}</h1>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={resetCount}>Reset</button>
        </>
    )
}
export default LocalStorage;