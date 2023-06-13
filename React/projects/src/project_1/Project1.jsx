import { useState } from 'react';
import data from './data';


function Project1() {
  const [people, setPeople] = useState(data);

  return(
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        {people.map((person) => {
          const { id, name, age, image } = person;
          return(
            <article key={id} className='person'>
              <img src={image} alt={name} />
              <div>
                <h4>{name}</h4>
                <p>{age}</p>
              </div>
            </article>
          );
        })}
        <button onClick={() => setPeople([])}>clear All</button>
      </section>
    </main>
  );
}

export default Project1;
