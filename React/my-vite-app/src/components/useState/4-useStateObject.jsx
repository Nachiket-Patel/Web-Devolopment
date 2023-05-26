import { useState } from 'react';


export default function UseStateObject() {

  const [name, setName] = useState('Peter');
  const [age, setAge] = useState(25);
  const [hobby, setHobby] = useState('read Books');

  return(
    <>
      <h2>{name}</h2>
      <h3>{age}</h3>
      <h4>Enjoys: {hobby}</h4>
      <button onClick={displayPerson}>Show next</button>
    </>
  );
}
