import React from 'react';


function MissedGoal() {
  return <h2>MISSED!</h2>
}

function MadeGoal() {
  return <h2>GOAL!</h2>
}

function Goal(props) {
  const isGoal = props.isGoal;
  if(isGoal){
    return <MadeGoal />
  }
  return <MissedGoal /> //!there we can't use else block
}

function LogicalOperator(props) {
  const cars = props.cars;
  return(
    <>
      <h2>Cars</h2>
      {cars.length > 0 && <h3>You have {cars.length} cars in your garage.</h3>} {/*this will work */}
      {car.length > 0 && <h3>You have {car.length} cars in your garage.</h3>} {/*this will not work */}
    </>
  );
}

function TernaryGoal(props) {
  const goal = props.goal;
  return (
      <>
        {goal ? <MadeGoal/> : <MissedGoal/>}
      </>
    );
}

const cars = ['BMW', 'AUDI', 'TOYOTA'];
const car = []; 
export default function ReactConditionalRendering() {
  return(
    <>
      <h1>Conditional Rendering</h1>
      <h2>Use of if block</h2>
      <Goal isGoal="True"/>
      <h1>Use of Logical && Operator</h1>
      <LogicalOperator cars={cars} car={car}/>
      <h1>Use of Ternary Goal</h1>
      <TernaryGoal goal={false}/>
    </>
  );
}
