import React, { useState } from 'react';


function AddForm() {
  return(
    <div>
      <h2>Add Form</h2>
      <p>adding simple form</p>
      <form>
        <label>Enter your name: 
          <input type="text" />
        </label>
      </form>
    </div>
  );
}

function HandlingForm() {
  const [name, setName] = useState("");

  return(
    <>
      <h2>Handling Form</h2>
      <p>handle form with useState hook</p>
      <form>
        <label>Enter Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
      </form>
      <p>check console for result</p>
      {console.log(name)}
    </>
  );
}

const SubmitForm = () => {
  const [name1, setName1] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Your name is: ${name1}`);
  }

  return(
    <>
      <h2>Submit Form</h2>
      <p>we can control default submit action</p>
      <form onSubmit={handleSubmit}>
        <label>Enter your fullname:
          <input type="text" value={name1} onChange={(e) => setName1(e.target.value)} />
        </label>
        <input type="submit" />
      </form>
    </>
  );
}

function MultiInputForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs)
  }

  return(
    <>
      <h2>Multiple Input Form</h2>
      <p>we can have multiple inputs in form.</p>
      <form onSubmit={handleSubmit}>
        <label>Enter your name: 
          <input type="text" name="username" value={inputs.username || ""} onChange={handleChange} />
        </label>
        <br/>
        <label>Enter your age:
          <input type="number" name="age" value={inputs.age || ""} onChange={handleChange} />
        </label>
        <br/>
        <input type="submit" />
      </form>
    </>
  );
}

function TextArea() {
  const [textarea, setTextarea] = useState("Add text here");

  const handleChange = (event) => {
    setTextarea(event.target.value);
  }

  return(
    <>
      <h2>Textarea</h2>
      <p>we can add textarea</p>
      <form>
        <textarea cols="50" rows="5" value={textarea} onChange={handleChange}></textarea>
      </form>
    </>
  );
}

function SelectMenu() {
  const [car, setCar] = useState("");

  const handleChange = (event) => {
    setCar(event.target.value)
  }

  return(
    <>
      <h2>Select Menu</h2>
      <p>we can add select menus</p>
      <form style={{margin: "10px 10px 50px"}}>
        <select value={car} onChange={handleChange}>
          <option value="BMW">BMW</option>
          <option value="AUDI">AUDI</option>
          <option value="TATA">TATA</option>
          <option value="FORD">FORD</option>
          <option value="MERCEDES">MERCEDES</option>
        </select>
      </form>
      {console.log(car)}
    </>
  );
}


export default function ReactForms() {
  return(
    <>
      <h1>React Forms</h1>
      <AddForm />
      <br/>
      <HandlingForm />
      <br/>
      <SubmitForm />
      <br/>
      <MultiInputForm />
      <br/>
      <TextArea />
      <br/>
      <SelectMenu />
    </>
  );
}
