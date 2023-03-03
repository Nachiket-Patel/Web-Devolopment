const numbers = [45, 4, 9, 16, 25];

//every() method returns true if all array values pass a test.
console.log("every()");
let allOver18 = numbers.every(myFunction);
function myFunction(a){
    return a>18;
}
console.log(allOver18);


//some() method returns true if some array values pass a test.
console.log("some()");
let someOver18 = numbers.some(myFunction1);
function myFunction1(b){
    return b>18;
}
console.log(someOver18);


//indexOf() method searches an array for an element value and returns its position.
//indexOf() returns -1 if the item is not found.
console.log("indexOf()");
const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple");
console.log(position);
//If the item is present more than once, it returns the position of the first occurrence.

//lastIndexOf() is the same as indexOf(), but returns the position of the last occurrence of the specified element.
console.log("lastIndexOf()");
let position1 = fruits.lastIndexOf("Apple");
console.log(position1);


//find() method returns the value of the first array element that passes a test function.
console.log("find()");
const numbers1 = [4, 9, 16, 25, 29];
let c = numbers1.find(myFunction2);
function myFunction2(c1){
    return c1>18;
}
console.log(c);

//findIndex() method returns the index of the first array element that passes a test function.
console.log("findIndex()");
let d = numbers1.findIndex(myFunction3);
function myFunction3(d1){
    return d1>18;
}
console.log(d);
