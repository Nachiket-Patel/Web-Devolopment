//! You are not required to use JSX, but JSX makes it easier to write React applications.

/*
* What is JSX?
JSX stands for JavaScript XML.
JSX allows us to write HTML in React.
JSX makes it easier to write and add HTML in React.
*/


/*
* Coding JSX
JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods.
JSX converts HTML tags into react elements.
*/
//example 1: with JSX
const myElement = <h1>I Love JSX!</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);

//example 2: without JSX
const myElement1 = React.createElement('h1', {}, 'I do know JSX!');
const root1 = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);

//As you can see in the first example, JSX allows us to write HTML directly within the JavaScript code.

//JSX is an extension of the JavaScript language based on ES6, and is translated into regular JavaScript at runtime.


/*
* Expressions in JSX
With JSX you can write expressions inside curly braces { }.
The expression can be a React variable, or property, or any other valid JavaScript expression. JSX will execute the expression and return the result:
*/
//example: Execute the expression 5 + 5
const myElement2 = <h1>React is {5 + 5} times better with JSX</h1>;

//* Inserting a Large Block of HTML
//To write HTML on multiple lines, put the HTML inside parentheses:
const myElement3 = (
    <ul>
      <li>Apples</li>
      <li>Bananas</li>
      <li>Cherries</li>
    </ul>
);
