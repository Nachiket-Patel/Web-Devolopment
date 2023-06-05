import React, { useState } from 'react';


export default function ReactHooks() {
  const [color, setColor] = useState("Black");

  return(
    <>
      <h1>My favorite color is: {color}</h1>
      <button type='button' onClick={() => setColor("Red")}>Red</button>
      <button type='button' onClick={() => setColor("Blue")}>Blue</button>
      <button type='button' onClick={() => setColor("Green")}>Green</button>
      <button type='button' onClick={() => setColor("Black")}>Black</button>
    </>
  );
}
