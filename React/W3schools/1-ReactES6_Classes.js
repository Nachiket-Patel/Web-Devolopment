//* ES6 introduced classes.
//* A class is a type of function, but instead of using the keyword function to initiate it, we use the keyword class, and the properties are assigned inside a constructor() method.

//example:
class Car{
    constructor(name){
        this.brand = name;
    }
}

//! Notice the case of the class name. We have begun the name, "Car", with an uppercase character. This is a standard naming convention for classes.

//Now you can create objects using the Car class:
class Car1{
    constructor(name1){
        this.brand = name1;
    }
}
const myCar = new Car("Ford");
console.log(myCar);
console.log(myCar.brand);

//! Note: The constructor function is called automatically when the object is initialized.


//* Method in Classes
class Car2{
    constructor(name2){
        this.brand = name2;
    }

    present(){
        return 'I have a ' + this.brand;
    }
}

const myCar2 = new Car2("Hyundai");
let a = myCar2.present();
console.log(a);
//As you can see in the example above, you call the method by referring to the object's method name followed by parentheses (parameters would go inside the parentheses).


//* Class Inheritance
//* To create a class inheritance, use the extends keyword.
//A class created with a class inheritance inherits all the methods from another class:

//example:
//Create a class named "Model" which will inherit the methods from the "Car" class:
class Car3{
    constructor(name3){
        this.brand = name3;
    }
    present(){
        return 'I have a ' + this.brand;
    }
}

class Model extends Car3{
    constructor(name3, mod){
        super(name3);
        this.model = mod;
    }
    show(){
        return this.present() + ', it is a ' + this.model;
    }
}

const myCar3 = new Model('BMW', 'series 7');
let b = myCar3.show();
console.log(b);

//* The super() method refers to the parent class.
//* By calling the super() method in the constructor method, we call the parent's constructor method and get access to the parent's properties and methods.
