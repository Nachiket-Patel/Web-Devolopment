/*
* Modules
JavaScript modules allow you to break up your code into separate files.
This makes it easier to maintain the code-base.
ES Modules rely on the import and export statements.
*/


/*
* Export
You can export a function or variable from any file.
Let us create a file, and fill it with the things we want to export.
There are two types of exports: Named and Default.
*/


//* Named Exports
//You can create named exports two ways. In-line individually, or all at once at the bottom.
//examples:
//In-line individually:
export const name = "Jesse";
export const age = 40;

//All at once at the bottom:
const name = "Jesse";
const age = 40;
export { name, age }


//* Default Exports
//! You can only have one default export in a file.
//example:
const massage = () => {
    const name = "James";
    const age = 25;
    return name + ' is ' + age + ' years old.';
};

export default massage;


//* Import
//You can import modules into a file in two ways, based on if they are named exports or default exports.
//Named exports must be destructured using curly braces. Default exports do not.
//in html file add <script type="module"></script>
//example:
import { name, age } from "./person.js"; // for variables

//and 

import message from "./message.js"; // for function
