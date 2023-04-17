//How to Display JavaScript Objects?
//Displaying a JavaScript object will output [object Object].

//check out file 5-display.

/*
Some common solutions to display JavaScript objects are:
Displaying the Object Properties by name
Displaying the Object Properties in a Loop
Displaying the Object using Object.values()
Displaying the Object using JSON.stringify()
*/


//Displaying Object Properties
//The properties of an object can be displayed as a string:
const person = {
    name: "John",
    age: 30,
    city: "New York"
};
let a = person.name + "," + person.age + "," + person.city;
console.log(a);
console.log(typeof(a));


//Displaying the Object in a Loop
//The properties of an object can be collected in a loop:
const person1 = {
    name: "James",
    age: 40,
    city: "Paris"
};

let txt = "";
for(let x in person1){
    txt += person1[x] + " ";
}
console.log(txt);
console.log(typeof(txt));
//You must use person[x] in the loop.
//person.x will not work (Because x is a variable).


//Using Object.values()
//Any JavaScript object can be converted to an array using Object.values():
const person2 = {
    name: "Samir",
    age: 25,
    city: "Mumbai",
};
const myArr = Object.values(person2);
console.log(myArr);
console.log(typeof(myArr));


//Using JSON.stringify()
//Any JavaScript object can be stringified (converted to a string) with the JavaScript function JSON.stringify():
const person3 = {
    name: "Parth",
    age: 32,
    city: "Delhi"
};
let myStr = JSON.stringify(person);
console.log(myStr);
console.log(typeof(myStr));


//Stringify Dates
//JSON.stringify converts dates into strings:
const person4 = {
    name: "John",
    today: new Date()
};
let myString = JSON.stringify(person4);
console.log(myString);
console.log(typeof(myString));


//Stringify Functions
//JSON.stringify will not stringify functions:
const person5 = {
    name: "John",
    age: function () {return 30;}
};

let b = JSON.stringify(person5);
console.log(b);
console.log(typeof(b));

//This can be "fixed" if you convert the functions into strings before stringifying.
person5.age = person.age.toString();
let c = JSON.stringify(person5);
console.log(c);


//Stringify Arrays
//It is also possible to stringify JavaScript arrays:
const arr = ["John", "Peter", "Sally", "Jane"];
let d = JSON.stringify(arr);
console.log(d);
console.log(typeof(d));
