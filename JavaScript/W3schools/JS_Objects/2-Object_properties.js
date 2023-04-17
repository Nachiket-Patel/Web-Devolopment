//Properties are the most important part of any JavaScript object.

/*
JavaScript Properties
Properties are the values associated with a JavaScript object.
A JavaScript object is a collection of unordered properties.
Properties can usually be changed, added, and deleted, but some are read only.
*/

/*
Accessing JavaScript Properties
The syntax for accessing the property of an object is:

objectName.property      // person.age
or

objectName["property"]   // person["age"]
or

objectName[expression]   // x = "age"; person[x]
*/


/*
JavaScript for...in Loop
The JavaScript for...in statement loops through the properties of an object.
Syntax
for (let variable in object) {
   code to be executed
}
The block of code inside of the for...in loop will be executed once for each property.
Looping through the properties of an object:
*/
const person = {
    fname:" John",
    lname:" Doe",
    age: 25
};
let txt = " ";
for (let x in person) {
    txt += person[x] + " ";
}
console.log(txt);


/*
Adding New Properties
You can add new properties to an existing object by simply giving it a value.
Assume that the person object already exists - you can then give it new properties:
*/
person.nationality = "English";
console.log(person);


//Deleting Properties
//The delete keyword deletes a property from an object:
delete person.nationality; // or person["nationality"]
console.log(person);
//The delete keyword deletes both the value of the property and the property itself.
//After deletion, the property cannot be used before it is added back again.
//The delete operator is designed to be used on object properties. It has no effect on variables or functions.
//The delete operator should not be used on predefined JavaScript object properties. It can crash your application.


//Nested Objects
//Values in an object can be another object:
myObj = {
  name:"John",
  age:30,
  cars: {
    car1:"Ford",
    car2:"BMW",
    car3:"Fiat",
    car4:"TATA",
  }
}

//first method
console.log(myObj.cars.car1);

//second method
console.log(myObj.cars["car2"]);

//third method
console.log(myObj["cars"]["car3"]);

//fourth method
let p1 = "cars";
let p2 = "car4";
console.log(myObj[p1][p2]);



//Nested Arrays and Objects
//Values in objects can be arrays, and values in arrays can be objects:
const myObj1 = {
    name: "John",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
}
//To access arrays inside arrays, use a for-in loop for each array:
let x = " ";
for (let i in myObj1.cars) {
    x += `${myObj1.cars[i].name}: `;
    for (let j in myObj1.cars[i].models) {
      x += `${myObj1.cars[i].models[j]}, `;
    }
    x += `\n`;
}
console.log(x);

/*
Property Attributes
All properties have a name. In addition they also have a value.
The value is one of the property's attributes.
Other attributes are: enumerable, configurable, and writable.
These attributes define how the property can be accessed (is it readable?, is it writable?)
In JavaScript, all attributes can be read, but only the value attribute can be changed (and only if the property is writable).
( ECMAScript 5 has methods for both getting and setting all property attributes)
*/


/*
Prototype Properties
JavaScript objects inherit the properties of their prototype.
The delete keyword does not delete inherited properties, but if you delete a prototype property, it will affect all objects inherited from the prototype.
*/
