import { useState, useEffect, useRef } from 'react';


const NoRerenders = () => {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);
  const [counter, setCounter] = useState(0);



  useEffect(() => {
    count.current = count.current + 1;
  });

  return(
    <>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <h2>Render Count: {count.current}</h2>
      <h2>Count: {counter}</h2>
      <button className='btn' type='button' onClick={() => setCounter(counter+1)}>click me</button>
    </>
  );
}


const AccessDOM = () => {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  return(
    <>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}


function TrackStateChanges() {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
    </>
  );
}


export default function UseRefHook() {
  return(
    <>
      <p><em>Note: for batter experience comment others and call only one function only at a time.</em></p>
      <h1>No Rerender</h1>
      <p>If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render. so we use <b>useRef Hook</b></p>
      <NoRerenders />
      <br/><br/>
      <h1>Accessing DOM Elements</h1>
      <p>In React, we can add a ref attribute to an element to access it directly in the DOM.</p>
      <AccessDOM />
      <br/><br/>
      <h1>Tracking State Changes</h1>
      <p>The useRef Hook can also be used to keep track of previous state values.</p>
      <p>This is because we are able to persist useRef values between renders.</p>
      <TrackStateChanges />
    </>
  );
}
