//A JavaScript class is not an object.
//It is a template for JavaScript objects.

/*
JavaScript Class Syntax
Use the keyword class to create a class.

Always add a method named constructor():

Syntax
class ClassName {
  constructor() { ... }
}
*/

//Example
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);

console.log("Car:" + myCar1.name + " and year:" + myCar1.year);
console.log("Car:" + myCar2.name + " and year:" + myCar2.year);

//The constructor method is called automatically when a new object is created.


/*
The Constructor Method

The constructor method is a special method:
It has to have the exact name "constructor"
It is executed automatically when a new object is created
It is used to initialize object properties

If you do not define a constructor method, JavaScript will add an empty constructor method.
*/


/*
Class Methods
Class methods are created with the same syntax as object methods.

Use the keyword class to create a class.

Always add a constructor() method.

Then add any number of methods.

Syntax
class ClassName {
  constructor() { ... }
  method_1() { ... }
  method_2() { ... }
  method_3() { ... }
}
*/

class Car1 {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age() {
      const date = new Date();
      return date.getFullYear() - this.year;
    }
}
  
const myCar3 = new Car1("BMW", 2022);
console.log("My car is " + myCar3.age() + " years old.");


//You can send parameters to Class methods:
class Car2 {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age(x) {
      return x - this.year;
    }
}

const date = new Date();
let year = date.getFullYear();

const myCar4 = new Car2("Ford", 2014);

console.log("My car is " + myCar4.age(year) + " years old.");
