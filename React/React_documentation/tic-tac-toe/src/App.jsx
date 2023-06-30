import './App.css';


function Square(props) {
  return(
    <button className='square'>{props.value}</button>
  );
}


function App() {

  return (
    <>
      <h1 style={{textAlign: 'center'}}>Tic Tac Toe</h1>
      <section>
        <div className="board-row">
          <Square value={1} />
          <Square value={2} />
          <Square value={3} />
        </div>
        <div className="board-row">
          <Square value={4} />
          <Square value={5} />
          <Square value={6} />
        </div>
        <div className="board-row">
          <Square value={7} />
          <Square value={8} />
          <Square value={9} />
        </div>
      </section>
    </>
  );
}


export default App;
