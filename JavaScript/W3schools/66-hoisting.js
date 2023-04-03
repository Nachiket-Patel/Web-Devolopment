//Hoisting is JavaScript's default behavior of moving declarations to the top.
/*
Declare Your Variables At the Top !
Hoisting is (to many developers) an unknown or overlooked behavior of JavaScript.
If a developer doesn't understand hoisting, programs may contain bugs (errors).
To avoid bugs, always declare all variables at the beginning of every scope.
Since this is how JavaScript interprets the code, it is always a good rule.
*/

//JavaScript Declarations are Hoisted
//In JavaScript, a variable can be declared after it has been used.
//In other words; a variable can be used before it has been declared.
a = 5;
console.log(x);
var x;

//Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).

/*
The let and const Keywords
Variables defined with let and const are hoisted to the top of the block, but not initialized.

Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.

Using a let variable before it is declared will result in a ReferenceError.

The variable is in a "temporal dead zone" from the start of the block until it is declared:
*/

//JavaScript in strict mode does not allow variables to be used if they are not declared.
