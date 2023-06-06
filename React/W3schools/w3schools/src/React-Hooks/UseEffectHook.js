import { useState, useEffect } from 'react';


const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return(<h3>I have rendered {count} times!</h3>);
}

const OneTimer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []);

  return(<h3>This will render only {count} times!</h3>);
}

const Counter = () => {
  const [count,setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 10);
  }, [count]);

  return(
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  );
}

function EffectCleanUp() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((c) => c + 1);
    }, 1000);

    return() => clearTimeout(timer)
  }, []);

  return(<h3>This will render {count} times!</h3>);
}

export default function UseEffectHook() {
  return(
    <>
      <h2>Timer</h2>
      <Timer />
      <br/>
      <h2>One Timer</h2>
      <OneTimer />
      <br/>
      <h2>Counter</h2>
      <Counter />
      <br/>
      <h2>Effect Clean Up</h2>
      <EffectCleanUp />
    </>
  );
}