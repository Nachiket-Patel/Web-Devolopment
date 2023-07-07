import './App.css';
import { useState } from 'react';


function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    console.log('Clicked!');
    setValue('X');
  }

  return(
    <button className='square' onClick={handleClick}>{value}</button>
  );
}


function App() {

  return (
    <>
      <h1 style={{textAlign: 'center'}}>Tic Tac Toe</h1>
      <section>
        <div className="board-row">
          <Square  />
          <Square  />
          <Square  />
        </div>
        <div className="board-row">
          <Square  />
          <Square  />
          <Square  />
        </div>
        <div className="board-row">
          <Square  />
          <Square  />
          <Square  />
        </div>
      </section>
    </>
  );
}


export default App;
