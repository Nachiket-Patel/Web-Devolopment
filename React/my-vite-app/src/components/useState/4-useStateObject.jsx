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

export default function UseStateObject() {
  return(
    <>
      <PersonObject />
    </>
  );
}
