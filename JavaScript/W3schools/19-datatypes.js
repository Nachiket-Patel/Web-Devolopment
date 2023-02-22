//when adding number to string JavaScript will treat number as string.
let a = 16 + "Hello";
console.log(a);

let b = "Hello" + 10;
console.log(b);

//JavaScript evaluates expressions from left to right. Different sequences can produce different results

let c = 10 + 5 + "Hello";
console.log(c);

let d = "Hello" + 20 + 10;
console.log(d);

//JavaScript has dynamic types. This means that the same variable can be used to hold different data types:
let x;       // Now x is undefined
x = 5;       // Now x is a Number
x = "John";  // Now x is a String
console.log(x);

//JavaScript BigInt is a new datatype (2020) that can be used to store integer values that are too big to be represented by a normal JavaScript Number.
let y = BigInt("123456789012345678901234567890");
console.log(y);

//to check datatype of variable or value typeof operator is used.
console.log(typeof(y));
console.log(typeof(""));

//value of null or value not given
var e;
console.log(typeof(e));
var f = null;
console.log(f);
console.log(typeof(f));

//arrays are written with []
const cars = ["Toyota", "Audi", "BMW"];
console.log(cars[1]);

//objects are written with {}
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
console.log(person.firstName +" is age of " + person.age);
