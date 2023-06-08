import { useState } from 'react';


const NeedForObject = () => {
  const [name, setName] = useState('Peter');
  const [age, setAge] = useState(25);
  const [hobby, setHobby] = useState('read Books');

  const displayPerson = () => {
    setName("John");
    setAge(30);
    setHobby("Play football")
  }

  return(
    <>
      <h2>{name}</h2>
      <h3>{age}</h3>
      <h4>Enjoys: {hobby}</h4>
      <button className="btn" onClick={displayPerson}>Show next</button>
    </>
  );
} 


const PersonObject = () => {
  const [person, setPerson] = useState({
    name: "James",
    age: "35",
    hobby: "SPY",
  });

  const displayPerson = () => {
    setPerson({
      name: "Jason",
      age: "32",
      hobby: "ex-SPY",
    });
  }

  return(
    <>
      <h2>{person.name}</h2>
      <h3>{person.age}</h3>
      <h4>Enjoys: {person.hobby}</h4>
      <button className="btn" onClick={displayPerson}>Show next</button>
    </>
  );
}


const ProblemSync = () => {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(count + 1);
    console.log(count); //! check in console, count will be one number behind not sync with display count.
  }

  return(
    <>
      <h2>Problem with state sync</h2>
      <h2>Count: {count}</h2>
      <button className="btn" onClick={Increment}>Increase</button>
      <p>check in console, count will be one number behind not sync with display count.</p>
    </>
  );
}


function SolutionSync() {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(count + 1);
    console.log(count + 1);
  }

  return(
    <>
      <h2>Solution of state sync</h2>
      <h2>Count: {count}</h2>
      <button className="btn" onClick={Increment}>+</button>
      <p>check in console, now count is same as in console and display.</p>
    </>
  );
}


export default function UseStateObject() {
  return(
    <>
      <ProblemSync />
      <br/>
      <SolutionSync />
    </>
  );
}
