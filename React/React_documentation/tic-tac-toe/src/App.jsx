import './App.css';
import { useState } from 'react';


function Square({ value, onSquareClick }) {
  return(
    <button className='square' onClick={onSquareClick}>{value}</button>
  );
}


function win(squares) {

  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8],
  ];

  for(let i=0; i<lines.length; i++){
    const [a,b,c] = lines[i];
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a];
    }
  }
  return null;
}


function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [x, setX] = useState(true);

  function handleClick(i) {
  
    if(squares[i] || win(squares)){
      return;
    }

    const nextSquares = squares.slice();

    x ? nextSquares[i] = "X" : nextSquares[i] = "0";
    
    setSquares(nextSquares);
    setX(!x);
  }


  const winner = win(squares);
  let status;
  winner ? status = "Winner: " + winner : status = "Next player: " + (x ? "X" : "0");


  return (
    <>
      <h1 style={{textAlign: 'center'}}>Tic Tac Toe</h1>
      <section>
      <div className="status">{status}</div>
        <div className="board-row">
          <Square  value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square  value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square  value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square  value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square  value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square  value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square  value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square  value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square  value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </section>
    </>
  );
}


export default App;
