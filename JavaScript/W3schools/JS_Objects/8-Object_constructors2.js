//!The Math() object is not in the list. Math is a global object. The new keyword cannot be used on Math.


/*
*Built-in JavaScript Constructors

JavaScript has built-in constructors for native objects:
new String()    // A new String object
new Number()    // A new Number object
new Boolean()   // A new Boolean object
new Object()    // A new Object object
new Array()     // A new Array object
new RegExp()    // A new RegExp object
new Function()  // A new Function object
new Date()      // A new Date object
*/



/*
*Did You Know?
As you can see above, JavaScript has object versions of the primitive data types String, Number, and Boolean. But there is no reason to create complex objects. Primitive values are much faster:
Use string literals "" instead of new String().
Use number literals 50 instead of new Number().
Use boolean literals true / false instead of new Boolean().
Use object literals {} instead of new Object().
Use array literals [] instead of new Array().
Use pattern literals /()/ instead of new RegExp().
Use function expressions () {} instead of new Function().
*/
let x1 = "";             // new primitive string
let x2 = 0;              // new primitive number
let x3 = false;          // new primitive boolean

const x4 = {};           // new Object object
const x5 = [];           // new Array object
const x6 = /()/          // new RegExp object
const x7 = function(){}; // new function


/*
*String Objects
Normally, strings are created as primitives: firstName = "John"
But strings can also be created as objects using the new keyword:
firstName = new String("John")
*/


/*
*Number Objects
Normally, numbers are created as primitives: x = 30
But numbers can also be created as objects using the new keyword:
x = new Number(30)
*/


/*
*Boolean Objects
Normally, booleans are created as primitives: x = false
But booleans can also be created as objects using the new keyword:
x = new Boolean(false)
*/
