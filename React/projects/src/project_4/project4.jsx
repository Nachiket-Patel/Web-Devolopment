import data from './data';
import { useState } from 'react';
import SingleQuestion from './Question';


function Project4() {
  const [questions, setQuestions] = useState(data);

  return(
    <main>
      <div className='container'>
        <h3>Questions and Answers about login</h3>
        <section className="info">
          {questions.map((q) => {
            return(
              <SingleQuestion key={q.id} {...q} />
            );
          })}
        </section>
      </div>
    </main>
  );
}


export default Project4;
