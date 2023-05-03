/*
* One Top Level Element
The HTML code must be wrapped in ONE top level element.
So if you like to write two paragraphs, you must put them inside a parent element, like a div element.
*/
//example: Wrap two paragraphs inside one DIV element
const myElement4 = (
    <div>
      <p>I am a paragraph.</p>
      <p>I am a paragraph too.</p>
    </div>
);

//! JSX will throw an error if the HTML is not correct, or if the HTML misses a parent element.

//Alternatively, you can use a "fragment" to wrap multiple lines. This will prevent unnecessarily adding extra nodes to the DOM.

//? A fragment looks like an empty HTML tag: <></> or <React.Fragment></React.Fragment>

//example: Wrap two paragraphs inside a fragment
const myElement5 = (
    <> {/** or use <React.Fragment></React.Fragment> */}
      <p>I am a paragraph.</p>
      <p>I am a paragraph too.</p>
    </> 
);


//* Elements Must be Closed
//JSX follows XML rules, and therefore HTML elements must be properly closed.
//example: Close empty elements with />
const myElement6 = <input type="text" />;

//! JSX will throw an error if the HTML is not properly closed.


/*
* Attribute class = className
The class attribute is a much used attribute in HTML, but since JSX is rendered as JavaScript, and the class keyword is a reserved word in JavaScript, you are not allowed to use it in JSX.

! Use attribute className instead.

JSX solved this by using className instead. When JSX is rendered, it translates className attributes into class attributes.
*/
//example: Use attribute className instead of class in JSX
const myElement7 = <h1 className="myclass">Hello World</h1>;

//? same rule apply for and htmlFor.
//! Use attribute htmlFor instead.


/*
* Conditions - if statements
React supports if statements, but not inside JSX.
To be able to use conditional statements in JSX, you should put the if statements outside of the JSX, or you could use a ternary expression instead.
*/

//Option 1: Write if statements outside of the JSX code
//example: Write "Hello" if x is less than 10, otherwise "Goodbye"
const x = 5;
let text = "Goodbye";
if (x < 10) {
  text = "Hello";
}

const myElement8 = <h1>{text}</h1>;

//Option 2: Use ternary expressions instead
//example: Write "Hello" if x is less than 10, otherwise "Goodbye"
const y = 5;

const myElement9 = <h1>{(y) < 10 ? "Hello" : "Goodbye"}</h1>;

//! Note that in order to embed a JavaScript expression inside JSX, the JavaScript must be wrapped with curly braces, {}.
