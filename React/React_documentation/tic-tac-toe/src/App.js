import React, { useState } from 'react';
import './App.css';


function Square(){
  const [value, setValue] = useState(null);
  function handleClick(){
    setValue('X');
    console.log('clicked!');
  }
  return (
    <button className='square' onClick={handleClick}>{value}</button>
  );
}

export default function Board(){
  return(
    <div className="board">
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>  
    </div>
  );
}
