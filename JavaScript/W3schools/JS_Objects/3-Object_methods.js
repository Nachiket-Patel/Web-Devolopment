//this is not a variable. It is a keyword. You cannot change the value of this.

const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
};
console.log(person.fullName());


/*
What is this?
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


/*
Accessing Object Methods
You access an object method with the following syntax:
    objectName.methodName()
You will typically describe fullName() as a method of the person object, and fullName as a property.
The fullName property will execute (as a function) when it is invoked with ().
This example accesses the fullName() method of a person object:
*/
console.log(person.fullName());

//If you access the fullName property, without (), it will return the function definition:
console.log(person.fullName);


//Adding a Method to an Object
//Adding a new method to an object is easy:
console.log("My friend is: " + person.fullName());


//Using Built-In Methods
let a = "My friend is " + person.fullName().toUpperCase();
console.log(a);
