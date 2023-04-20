//!this is not a variable. It is a keyword. You cannot change the value of this.

function Person(first, last, age, eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

const student = new Person("Harry", "Potter", 25 ,"brown");
console.log("Student name is " + student.firstName + " " + student.lastName + " is age of " + student.age + " and eye color is " + student.eyeColor + ".");
const student1 = new Person("Draco", "Malfoy", 26, "blue");
console.log(`Student name is ${student1.firstName} ${student1.lastName} is age of ${student1.age} and eye color is ${student1.eyeColor}.`);

/*
*Notes
It is considered good practice to name constructor functions with an upper-case first letter.

About this
In a constructor function this does not have a value. It is a substitute for the new object. The value of this will become the new object when a new object is created.
*/

/*
*Object Types (Blueprints) (Classes)
The examples from the previous chapters are limited. They only create single objects.
Sometimes we need a "blueprint" for creating many objects of the same "type".
The way to create an "object type", is to use an object constructor function.
In the example above, function Person() is an object constructor function.
Objects of the same type are created by calling the constructor function with the new keyword
*/


/*
*What is this?
In JavaScript, the this keyword refers to an object.
Which object depends on how this is being invoked (used or called).

The this keyword refers to different objects depending on how it is used:
In an object method, this refers to the object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object.
*/


//*Adding a Property to an Object
//Adding a new property to an existing object is easy:
student.nationality = "English";
console.log(student.firstName + " is " + student.nationality);
//The property will be added to student. Not to student1. (Not to any other person objects).


//*Adding a Method to an Object
//Adding a new method to an existing object is easy:
student1.fullName = function() {
    return this.firstName + " " + this.lastName;
}
console.log("Student name is " + student1.fullName());
//The method will be added to student1. Not to student. (Not to any other person objects).


//*Adding a Property to a Constructor
//You cannot add a new property to an object constructor the same way you add a new property to an existing object:
Person.nationality = "English";

//To add a new property to a constructor, you must add it to the constructor function:
function Person1(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.nationality = "English";
}
const student3 = new Person1("Harry", "Potter", 30 ,"brown");
const student4 = new Person1("Draco", "Malfoy", 28, "blue");
console.log(student3.firstName + " " + student3.lastName + " is " + student3.nationality);
console.log(student4.firstName + " " + student4.lastName + " is " + student4.nationality);
//This way object properties can have default values.


//*Adding a Method to a Constructor
//Your constructor function can also define methods:
function Person2(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.name = function() {
      return this.firstName + " " + this.lastName;
    };
}
const std = new Person2("Hermione", "Granger", 18 , "green");
console.log("student full name is " + std.name());

//You cannot add a new method to an object constructor the same way you add a new method to an existing object.
//Adding methods to an object constructor must be done inside the constructor function:

function Person3(firstName, lastName, age, eyeColor) {
    this.firstName = firstName; 
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;
    this.changeName = function (name) {
      this.lastName = name;
    };
}
const std1 = new Person3("Hermione", "Granger", 18 , "green");
std1.changeName("Weasly");
console.log("Hermione's new last name is " + std1.lastName);
//JavaScript knows which person you are talking about by "substituting" this with std1.
