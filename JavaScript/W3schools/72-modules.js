//Modules only work with the HTTP(s) protocol.
//A web-page opened via the file:// protocol cannot use import / export.

/*
Modules
JavaScript modules allow you to break up your code into separate files.
This makes it easier to maintain a code-base.
Modules are imported from external files with the import statement.
Modules also rely on type="module" in the <script> tag.
*/

/*
Export
Modules with functions or variables can be stored in any external file.
There are two types of exports: Named Exports and Default Exports.

Named Exports
Let us create a file named person.js, and fill it with the things we want to export.
You can create named exports two ways. In-line individually, or all at once at the bottom.
*/
//In-line individually:
export const name = "Jesse";
export const age = 40;

//All at once at the bottom:
const name = "Jesse";
const age = 40;
export {name, age};

//Default Exports
//Let us create another file, named message.js, and use it for demonstrating default export.
//You can only have one default export in a file.


//Import
//You can import modules into a file in two ways, based on if they are named exports or default exports.
//Named exports are constructed using curly braces. Default exports are not.
import { name, age } from "./person.js";
import message from "./message.js";
