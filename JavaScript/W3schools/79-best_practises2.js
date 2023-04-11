/*
Don't Use new Object()
Use "" instead of new String()
Use 0 instead of new Number()
Use false instead of new Boolean()
Use {} instead of new Object()
Use [] instead of new Array()
Use /()/ instead of new RegExp()
Use function (){} instead of new Function()
*/
//Example
let x1 = "";             // new primitive string
let x2 = 0;              // new primitive number
let x3 = false;          // new primitive boolean
const x4 = {};           // new object
const x5 = [];           // new array object
const x6 = /()/;         // new regexp object
const x7 = function(){}; // new function object


/*
Beware of Automatic Type Conversions
JavaScript is loosely typed.
A variable can contain all data types.
A variable can change its data type:
*/
let x = "Hello";     // typeof x is a string
x = 5;               // changes typeof x to a number

//Beware that numbers can accidentally be converted to strings or NaN (Not a Number).
//When doing mathematical operations, JavaScript can convert numbers to strings:
let a = 5 + 7;       // a.valueOf() is 12,  typeof a is a number
let a1 = 5 + "7";     // a1.valueOf() is 57,  typeof a1 is a string
let a2 = "5" + 7;     // a2.valueOf() is 57,  typeof a2 is a string
let a3 = 5 - 7;       // a3.valueOf() is -2,  typeof a3 is a number
let a4 = 5 - "7";     // a4.valueOf() is -2,  typeof a4 is a number
let a5 = "5" - 7;     // a5.valueOf() is -2,  typeof a5 is a number
let a6 = 5 - "x";     // a6.valueOf() is NaN, typeof a6 is a number

//Subtracting a string from a string, does not generate an error but returns NaN (Not a Number):
"Hello" - "Dolly"    // returns NaN


/*
Use === Comparison
The == comparison operator always converts (to matching types) before comparison.
The === operator forces comparison of values and type:
*/
0 == "";        // true
1 == "1";       // true
1 == true;      // true

0 === "";       // false
1 === "1";      // false
1 === true;     // false


/*
Use Parameter Defaults
If a function is called with a missing argument, the value of the missing argument is set to undefined.
Undefined values can break your code. It is a good habit to assign default values to arguments.
*/
function myFunction(x, y) {
    if (y === undefined) {
      y = 0;
    }
}


//End Your Switches with Defaults
//Always end your switch statements with a default. Even if you think there is no need for it.


//Avoid Number, String, and Boolean as Objects
//Always treat numbers, strings, or booleans as primitive values. Not as objects.
//Declaring these types as objects, slows down execution speed, and produces nasty side effects:
//Don't use new keyword to create objects.


//Avoid Using eval()
//The eval() function is used to run text as code. In almost all cases, it should not be necessary to use it.
//Because it allows arbitrary code to be run, it also represents a security problem.
