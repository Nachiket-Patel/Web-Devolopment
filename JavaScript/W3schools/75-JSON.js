//JSON names require double quotes. JavaScript names do not.

/*
JSON is a format for storing and transporting data.

JSON is often used when data is sent from a server to a web page.

What is JSON?
JSON stands for JavaScript Object Notation
JSON is a lightweight data interchange format
JSON is language independent *
JSON is "self-describing" and easy to understand
* The JSON syntax is derived from JavaScript object notation syntax, but the JSON format is text only. Code for reading and generating JSON data can be written in any programming language.
*/

//JSON Example:
const a = {
    "employees":[
      {"firstName":"John", "lastName":"Doe"},
      {"firstName":"Anna", "lastName":"Smith"},
      {"firstName":"Peter", "lastName":"Jones"}
    ]
};

/*
The JSON Format Evaluates to JavaScript Objects
The JSON format is syntactically identical to the code for creating JavaScript objects.

Because of this similarity, a JavaScript program can easily convert JSON data into native JavaScript objects.

JSON Syntax Rules:
Data is in name/value pairs
Data is separated by commas
Curly braces hold objects
Square brackets hold arrays
*/


//JSON Data - A Name and a Value
//JSON data is written as name/value pairs, just like JavaScript object properties.
//A name/value pair consists of a field name (in double quotes), followed by a colon, followed by a value:
///example: "firstName":"John";


//JSON Objects
//JSON objects are written inside curly braces.
//Just like in JavaScript, objects can contain multiple name/value pairs:
let b = {"firstName":"John", "lastName":"Doe"};


//JSON Arrays
//JSON arrays are written inside square brackets.
//Just like in JavaScript, an array can contain objects:
let c = {
  "employees":[
    {"firstName":"John", "lastName":"Doe"},
    {"firstName":"Anna", "lastName":"Smith"},
    {"firstName":"Peter", "lastName":"Jones"}
  ]
}
//In the example above, the object "employees" is an array. It contains three objects.
//Each object is a record of a person (with a first name and a last name).


//Converting a JSON Text to a JavaScript Object
//A common use of JSON is to read data from a web server, and display the data in a web page.
//For simplicity, this can be demonstrated using a string as input.
//First, create a JavaScript string containing JSON syntax:
let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

//Then, use the JavaScript built-in function JSON.parse() to convert the string into a JavaScript object:
const obj = JSON.parse(text);
console.log(obj.employees[1].firstName + " " + obj.employees[1].lastName);
