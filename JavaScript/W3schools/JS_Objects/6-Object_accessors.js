//JavaScript Accessors (Getters and Setters)
//ECMAScript 5 (ES5 2009) introduced Getter and Setters.
//Getters and setters allow you to define Object Accessors (Computed Properties).

/*
Why Using Getters and Setters?
It gives simpler syntax
It allows equal syntax for properties and methods
It can secure better data quality
It is useful for doing things behind-the-scenes
*/


//JavaScript Getter (The get Keyword)
//This example uses a lang property to get the value of the language property.
const person = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get lang() {
      return this.language;
    },
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
console.log(person.lang);


//JavaScript Setter (The set Keyword)
//This example uses a lang property to set the value of the language property.
const person1 = {
    firstName: "Jason",
    lastName: "Bourne",
    set Age(age) {
      this.language = age;
    },
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
};
person.Age = 26;
console.log(person.Age);


//JavaScript Function or Getter?
//What is the differences between these two examples?
// Display data from the object using a method:
console.log(person.fullName());
// Display data from the object using a getter:
console.log(person1.fullName);
//Example 1 access fullName as a function: person.fullName().
//Example 2 access fullName as a property: person.fullName.
//The second example provides a simpler syntax.


//Data Quality
//JavaScript can secure better data quality when using getters and setters.


//Object.defineProperty()
//The Object.defineProperty() method can also be used to add Getters and Setters:
// Define an object
const obj = {counter : 0};

// Define Setters and Getters
Object.defineProperty(obj, "reset", {
  get : function () {this.counter = 0;}
});
Object.defineProperty(obj, "increment", {
  get : function () {this.counter++;}
});
Object.defineProperty(obj, "decrement", {
  get : function () {this.counter--;}
});
Object.defineProperty(obj, "add", {
  set : function (value) {this.counter += value;}
});
Object.defineProperty(obj, "subtract", {
  set : function (value) {this.counter -= value;}
});

// Play with counter:
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;

console.log(obj.counter);
