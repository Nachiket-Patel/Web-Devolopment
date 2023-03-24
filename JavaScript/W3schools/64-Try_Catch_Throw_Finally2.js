/*
The Error Object
JavaScript has a built in error object that provides error information when an error occurs.
The error object provides two useful properties: name and message.

Error Object Properties
Property	        Description
    name	            Sets or returns an error name
    message	            Sets or returns an error message (a string)


Error Name Values
Six different values can be returned by the error name property:

Error Name	        Description
    EvalError	        An error has occurred in the eval() function
    RangeError	        A number "out of range" has occurred
    ReferenceError	    An illegal reference has occurred
    SyntaxError	        A syntax error has occurred
    TypeError	        A type error has occurred
    URIError	        An error in encodeURI() has occurred

The six different values are described below.
*/

//Eval Error
//An EvalError indicates an error in the eval() function.
//Newer versions of JavaScript do not throw EvalError. Use SyntaxError instead.


//Range Error
//A RangeError is thrown if you use a number that is outside the range of legal values.
let a = 1;
try{
    a.toPrecision(500);  // A number cannot have 500 significant digits
}
catch(err){
    console.log(err);
}


//Reference Error
//A ReferenceError is thrown if you use (reference) a variable that has not been declared:
let b = 5;
try{
    c = b + 1; // c cannot be used (referenced)
}
catch(err){
    console.log(err);
}


//Syntax Error
//A SyntaxError is thrown if you try to evaluate code with a syntax error.
try {
    eval("alert('Hello)");   // Missing ' will produce an error
}
catch(err) {
    console.log(err);
}


//Type Error
//A TypeError is thrown if you use a value that is outside the range of expected types:
let num = 1;
try {
    num.toUpperCase();   // You cannot convert a number to upper case
}
catch(err) {
    console.log(err);
}


//URI (Uniform Resource Identifier) Error
//A URIError is thrown if you use illegal characters in a URI function:
try {
    decodeURI("%%%");   // You cannot URI decode percent signs
}
catch(err) {
    console.log(err);
}
