import React from 'react';
import { data } from '../../data';


const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    console.log(id);
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  
  return(
    <div>
      {people.map((person) => {
        const {id, name} = person
        console.log(person);
        return(
          <div key={id}>
            <h4>{name}</h4>
            <button type='button' onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button className='btn' type='button' style={{marginTop: '3rem'}} onClick={() => setPeople([])}>Clear items</button>
    </div>
  );

}

export default UseStateArray;
