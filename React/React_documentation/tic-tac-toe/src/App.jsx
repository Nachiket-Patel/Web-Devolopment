import './App.css';


function Square() {
  return(
    <button className='square'>X</button>
  );
}


function App() {

  return (
    <>
      <h1 style={{textAlign: 'center'}}>Tic Tac Toe</h1>
      <section>
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
      </section>
    </>
  );
}


export default App;
