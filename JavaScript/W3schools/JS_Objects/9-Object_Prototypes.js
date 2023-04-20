//*All JavaScript objects inherit properties and methods from a prototype.

//!Only modify your own prototypes. Never modify the prototypes of standard JavaScript objects.

/*
*Prototype Inheritance
All JavaScript objects inherit properties and methods from a prototype:
Date objects inherit from Date.prototype
Array objects inherit from Array.prototype
Person objects inherit from Person.prototype
The Object.prototype is on the top of the prototype inheritance chain:

Date objects, Array objects, and Person objects inherit from Object.prototype.
*/


//*Adding Properties and Methods to Objects
//Sometimes you want to add new properties (or methods) to all existing objects of a given type.
//Sometimes you want to add new properties (or methods) to an object constructor.


//*Using the prototype Property
//The JavaScript prototype property allows you to add new properties to object constructors:
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
Person.prototype.nationality = "English";
const person = new Person("John", "Doe", 50, "blue");
console.log("Nationality of person is " + person.nationality);

//The JavaScript prototype property also allows you to add new methods to objects constructors:
function Person1(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
Person1.prototype.name = function() {
    return this.firstName + " " + this.lastName
};
const person1 = new Person1("John", "Doe", 50, "blue");
console.log("Fullname of person is " + person1.name());
