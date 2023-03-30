//Scope determines the accessibility of variables, objects, and functions from different parts of the code.
/*
Scope determines the accessibility (visibility) of variables.

JavaScript has 3 types of scope:
Block scope
Function scope
Global scope
*/


//Block scope
//let and const provide Block scope in JavaScript
{
    let a = 10;
}
//console.log(a); // Reference error

//but var don't show this error
{
    var b = 15;
}
console.log(b);


//Local Scope
/*
Local variables have Function Scope: 
They can only be accessed from within the function.
Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.
Local variables are created when a function starts, and deleted when the function is completed.
Function arguments (parameters) work as local variables inside functions.
Function (local) variables are deleted when the function is completed.
*/

// code here can NOT use carName
function myFunction() {
    let carName = "Volvo";
    // code here CAN use carName
  }
// code here can NOT use carName


//Global Scope
/*
A global variable has Global Scope:
All scripts and functions on a web page can access it. 
Variables declared Globally (outside any function) have Global Scope.
Global variables can be accessed from anywhere in a JavaScript program.
Variables declared with var, let and const are quite similar when declared outside a block.
*/
var x = 2;       // Global scope
let y = 3;       // Global scope
const z = 4;       // Global scope

let carName = "Volvo";
// code here can use carName
function myFunction() {
// code here can also use carName
}

//Automatically Global
//If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.
//This code example will declare a global variable carName, even if the value is assigned inside a function.

myFunction();
// code here can use carName
function myFunction() {
  carName = "Volvo";
}

//Strict Mode
/*
All modern browsers support running JavaScript in "Strict Mode".
You will learn more about how to use strict mode in a later chapter of this tutorial.
In "Strict Mode", undeclared variables are not automatically global.
*/

//Global Variables in HTML
//With JavaScript, the global scope is the JavaScript environment.
//In HTML, the global scope is the window object.
//Global variables defined with the var keyword belong to the window object:

var car = "Volvo";
// code here can use window.carName
//Global variables defined with the let keyword do not belong to the window object:

let carName2 = "Volvo";
// code here can not use window.carName
/*
Warning
Do NOT create global variables unless you intend to.
Your global variables (or functions) can overwrite window variables (or functions).
Any function, including the window object, can overwrite your global variables and functions.
*/


/*
The Lifetime of JavaScript Variables
The lifetime of a JavaScript variable starts when it is declared.
Function (local) variables are deleted when the function is completed.
In a web browser, global variables are deleted when you close the browser window (or tab).
Function Arguments
Function arguments (parameters) work as local variables inside functions.
*/
