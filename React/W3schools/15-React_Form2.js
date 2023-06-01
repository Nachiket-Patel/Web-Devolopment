//* Textarea
//The textarea element in React is slightly different from ordinary HTML.
//In HTML the value of a textarea was the text between the start tag <textarea> and the end tag </textarea>.
<textarea>
  Content of the textarea.
</textarea>
//In React the value of a textarea is placed in a value attribute. We'll use the useState Hook to manage the value of the textarea
//Example: A simple textarea with some content
function MyForm() {
  const [textarea, setTextarea] = useState(
    "The content of a textarea goes in the value attribute"
  );

  const handleChange = (event) => {
    setTextarea(event.target.value)
  }

  return (
    <form>
      <textarea value={textarea} onChange={handleChange} />
    </form>
  )
}


//*Select
//A drop down list, or a select box, in React is also a bit different from HTML.
//in HTML, the selected value in the drop down list was defined with the selected attribute
//HTML:
<select>
  <option value="Ford">Ford</option>
  <option value="Volvo" selected>Volvo</option>
  <option value="Fiat">Fiat</option>
</select>

//In React, the selected value is defined with a value attribute on the select tag

//Example: A simple select box, where the selected value "Volvo" is initialized in the constructor
function MyForm() {
  const [myCar, setMyCar] = useState("Volvo");

  const handleChange = (event) => {
    setMyCar(event.target.value)
  }

  return (
    <form>
      <select value={myCar} onChange={handleChange}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
    </form>
  )
}

//By making these slight changes to <textarea> and <select>, React is able to handle all input elements in the same way.
