//? Components are like functions that return HTML elements.

/* 
* React Components
Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.
Components come in two types, Class components and Function components, in this tutorial we will concentrate on Function components.

! In older React code bases, you may find Class components primarily used. It is now suggested to use Function components along with Hooks, which were added in React 16.8. There is an optional section on Class components for your reference.
*/


//* Create Your First Component
//When creating a React component, the component's name MUST start with an upper case letter.

//? Only add export default file for only one component needs to export, or components in different files. 


/*
*Class Component
A class component must include the extends React.Component statement. This statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.
The component also requires a render() method, this method returns HTML.
*/
//Example 
//Create a Class component called Car
import React from "react"; // import React, { Component } from 'react';

class Car extends React.Component { //class Car extends Component
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}


/*
* Function Component
Here is the same example as above, but created using a Function component instead.
A Function component also returns HTML, and behaves much the same way as a Class component, but Function components can be written using much less code, are easier to understand, and will be preferred in this tutorial.
*/
//Example
//Create a Function component called Car
import React from 'react'

function Cars() { // export default function Cars()
  return <h2>Hi, I am a Car!</h2>;
}


/*
* Rendering a Component
Components are render in src/index.js file.
Components need to import first, by default there will be App component in index.js
*/
//code in index.js will look like this.
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

//*Or, import lines remain same
// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);
// root.render(
//   <App />
// );

//*Or, import lines remain same
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <App />
// );



//*Components in Components
//We can refer to components inside other components.
//and call that component.
//example:
function Car() {
  return <h2>I am a Car!</h2>;
}

function Garage() {
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Car />
    </>
  );
}


/*
* Components in Files
React is all about re-using code, and it is recommended to split your components into separate files.
To do that, create a new file with a .js file extension and put the code inside it

!Note that the filename must start with an uppercase character.
*/
//Example:
//create new file DifferentFileComponent.js
function DifferentFileComponent() {
  return <h2>Hi, I am a Car!</h2>;
}
export default DifferentFileComponent;

//To use this component import it in App or index file.
import DFC from './DifferentFileComponent.js';
//and use it in return function.
