//for in loop is used for looping through object 
const person = {fname:"John", lname:"Doe", age:25};

let text = "";
for (let x in person) {
  text += person[x];
}
console.log(text);

//here for in loop is used for looping through array.
const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
  txt += numbers[x];
}
console.log(txt);


//Do not use for in over an Array if the index order is important.
//It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.
const numbers1 = [45, 4, 9, 16, 25];

let txt1 = "";
numbers.forEach(myFunction);

function myFunction(value) {
  txt1 += value;
}
console.log(txt1);
