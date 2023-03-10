//The JavaScript for of statement loops through the values of an iterable object.
//It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more.
//looping over Array
const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x;
}
console.log(text);


//looping over string
let language = "JavaScript";

let text1 = "";
for (let x of language) {
text1 += x;
}
console.log(text1);
