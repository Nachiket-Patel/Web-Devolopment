//this is not a variable. It is a keyword. You cannot change the value of this.
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


//this in a Method
//When used in an object method, this refers to the object.
//In the example on top of this page, this refers to the person object.
const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
console.log(person.fullName());


//this Alone
//When used alone, this refers to the global object.
//Because this is running in the global scope.
//In a browser window the global object is [object Window]:
let x = this;
console.log(x);


// In strict mode, when used alone, this also refers to the global object:
//"use strict";
let y = this;
console.log(y);


//this in a Function (Default)
//In a function, the global object is the default binding for this.
//In a browser window the global object is [object Window]:
function myfun(){
    return this;
}


//this in a Function (Strict)
//JavaScript strict mode does not allow default binding.
//So, when used in a function, in strict mode, this is undefined.
//"use strict";
function myFun2() {
  return this;
}


//this in Event Handlers
//In HTML event handlers, this refers to the HTML element that received the event:
//check file 69-this.event.handle.html for that.


//Explicit Function Binding
//The call() and apply() methods are predefined JavaScript methods.
//They can both be used to call an object method with another object as argument.
//The example below calls person1.fullName with person2 as an argument, this refers to person2, even if fullName is a method of person1:
console.log("explicit function binding");
const person1 = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
}
  
const person2 = {
    firstName:"James",
    lastName: "Bond",
}
  
// Return "John Doe":
let a =  person1.fullName.call(person2);
console.log(a);


//Function Borrowing
//With the bind() method, an object can borrow a method from another object.
//This example creates 2 objects (person and member).
//The member object borrows the fullname method from the person object:
console.log("fuction borrowing");
const person3 = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  
const member = {
    firstName:"Hege",
    lastName: "Nilsen",
}
  
let fullName = person.fullName.bind(member);
console.log(fullName());


/*
This Precedence
To determine which object this refers to; use the following precedence of order.

Precedence	    Object
1	            bind()
2	            apply() and call()
3	            Object method
4	            Global scope
*/
