//The "use strict" directive is only recognized at the beginning of a script or a function.

//"use strict"; Defines that JavaScript code should be executed in "strict mode".

/*
The "use strict" Directive
The "use strict" directive was new in ECMAScript version 5.
It is not a statement, but a literal expression, ignored by earlier versions of JavaScript.
The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
With strict mode, you can not, for example, use undeclared variables.
*/
"use strict";

a = 5;
console.log(a); //error

/*
The "use strict"; Syntax
The syntax, for declaring strict mode, was designed to be compatible with older versions of JavaScript.
Compiling a numeric literal (4 + 5;) or a string literal ("John Doe";) in a JavaScript program has no side effects. It simply compiles to a non existing variable and dies.
So "use strict"; only matters to new compilers that "understand" the meaning of it.
*/

/*
Why Strict Mode?
Strict mode makes it easier to write "secure" JavaScript.
Strict mode changes previously accepted "bad syntax" into real errors.
As an example, in normal JavaScript, mistyping a variable name creates a new global variable. In strict mode, this will throw an error, making it impossible to accidentally create a global variable.
In normal JavaScript, a developer will not receive any error feedback assigning values to non-writable properties.
In strict mode, any assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object, will throw an error.
*/


//Not Allowed in Strict Mode
//Using a variable, without declaring it, is not allowed:
/*
Using a variable, without declaring it, is not allowed:

Using an object, without declaring it, is not allowed:

Deleting a variable (or object) is not allowed.

Deleting a function is not allowed.

Duplicating a parameter name in function is not allowed:

Octal numeric literals are not allowed:

Octal escape characters are not allowed:

Writing to a read-only property is not allowed:

Writing to a get-only property is not allowed:

Deleting an undeletable property is not allowed:

The word eval cannot be used as a variable:

The word arguments cannot be used as a variable:

The with statement is not allowed:

For security reasons, eval() is not allowed to create variables in the scope from which it was called.
*/


//The this keyword in functions behaves differently in strict mode.
//The this keyword refers to the object that called the function.
//If the object is not specified, functions in strict mode will return undefined and functions in normal mode will return the global object (window):


/*
Future Proof!
Keywords reserved for future JavaScript versions can NOT be used as variable names in strict mode.

These are:

implements
interface
let
package
private
protected
public
static
yield
*/
