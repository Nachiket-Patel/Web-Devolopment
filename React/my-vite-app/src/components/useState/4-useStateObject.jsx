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


export default function UseStateObject() {
  return(
    <>
      <NeedForObject />
    </>
  );
}
