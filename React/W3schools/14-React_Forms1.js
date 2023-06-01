//Just like in HTML, React uses forms to allow users to interact with the web page.

//* Adding Forms in React
//You add a form with React like any other element:
//Example: Add a form that allows users to enter their name
function MyForm() {
  return (
    <form>
      <label>Enter your name:
        <input type="text" />
      </label>
    </form>
  )
}
//This will work as normal, the form will submit and the page will refresh.
//But this is generally not what we want to happen in React.
//We want to prevent this default behavior and let React control the form.


/*
* Handling Forms
Handling forms is about how you handle the data when it changes value or gets submitted.
In HTML, form data is usually handled by the DOM.
In React, form data is usually handled by the components.
When the data is handled by the components, all the data is stored in the component state.
You can control changes by adding event handlers in the onChange attribute.
We can use the useState Hook to keep track of each inputs value and provide a "single source of truth" for the entire application.
*/
//Example: Use the useState Hook to manage the input
function MyForm() {
  const [name, setName] = useState("");
  return (
    <form>
      <label>Enter your name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
    </form>
  )
}


//* Submitting Forms
//You can control the submit action by adding an event handler in the onSubmit attribute for the <form>
//Example: Add a submit button and an event handler in the onSubmit attribute.
function MyForm() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <input type="submit" />
    </form>
  )
}


/*
* Multiple Input Fields
You can control the values of more than one input field by adding a name attribute to each element.
We will initialize our state with an empty object.
To access the fields in the event handler use the event.target.name and event.target.value syntax.
To update the state, use square brackets [bracket notation] around the property name.
! Note: We use the same event handler function for both input fields, we could write one event handler for each, but this gives us much cleaner code and is the preferred way in React.
*/
//Example: Write a form with two input fields
function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input type="text" name="username" value={inputs.username || ""} onChange={handleChange} />
      </label>
      <label>Enter your age:
        <input type="number" name="age" value={inputs.age || ""} onChange={handleChange} />
        </label>
        <input type="submit" />
    </form>
  )
}
