//In JavaScript, objects are king. If you understand objects, you understand JavaScript.

/*
In JavaScript, almost "everything" is an object.
Booleans can be objects (if defined with the new keyword)
Numbers can be objects (if defined with the new keyword)
Strings can be objects (if defined with the new keyword)
Dates are always objects
Maths are always objects
Regular expressions are always objects
Arrays are always objects
Functions are always objects
Objects are always objects

All JavaScript values, except primitives, are objects.
*/


/*
JavaScript Primitives
A primitive value is a value that has no properties or methods.
3.14 is a primitive value
A primitive data type is data that has a primitive value.

JavaScript defines 7 types of primitive data types:
string
number
boolean
null
undefined
symbol
bigint
*/
//Immutable
//Primitive values are immutable (they are hardcoded and cannot be changed).
//if x = 3.14, you can change the value of x, but you cannot change the value of 3.14.


//A JavaScript object is a collection of named values
/*
Objects are Variables
JavaScript variables can contain single values
JavaScript variables can also contain many values.
Objects are variables too. But objects can contain many values.
Object values are written as name : value pairs (name and value separated by a colon).
It is a common practice to declare objects with the const keyword.
*/


/*
Objects written as name value pairs are similar to:
Associative arrays in PHP
Dictionaries in Python
Hash tables in C
Hash maps in Java
Hashes in Ruby and Perl
*/


/*
Creating a JavaScript Object
With JavaScript, you can define and create your own objects.

There are different ways to create new objects:
Create a single object, using an object literal.
Create a single object, with the keyword new.
Define an object constructor, and then create objects of the constructed type.
Create an object using Object.create().
*/


/*
Using an Object Literal
This is the easiest way to create a JavaScript Object.
Using an object literal, you both define and create an object in one statement.
An object literal is a list of name:value pairs (like age:50) inside curly braces {}.
The following example creates a new JavaScript object with four properties:
*/
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
console.log(person);

//This example creates an empty JavaScript object, and then adds 4 properties:
const person1 = {};
person1.firstName = "James";
person1.lastName = "Bond";
person1.age = 40;
person1.eyeColor = "green";
console.log(person1);

//Using the JavaScript Keyword new
//The following example create a new JavaScript object using new Object(), and then adds 4 properties:
const person2 = new Object();
person2.firstName = "Michael";
person2.lastName = "Sccot";
person2.age = 50;
person2.eyeColor = "black";
console.log(person2);

//The examples above do exactly the same.
//But there is no need to use new Object().
//For readability, simplicity and execution speed, use the object literal method.


/*
The examples above do exactly the same.
But there is no need to use new Object().
For readability, simplicity and execution speed, use the object literal method.
const x = person;  // Will not create a copy of person.
The object x is not a copy of person. It is person. Both x and person are the same object.
Any changes to x will also change person, because x and person are the same object.
*/
const person3 = {
    firstName:"John",
    lastName:"Doe",
    age:50, eyeColor:"blue"
}
const x = person3;
x.age = 10;      // Will change both x.age and person.age
console.log(person3);
