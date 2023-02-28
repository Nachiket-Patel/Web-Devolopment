//It is a common practice to declare arrays with the const keyword.
//JavaScript arrays are dynamic so they don't need to provide size like C.
//create array with elements 
const cars = ["Audi", "BMW", "mercedes"];
//or create array first than add elements
const flours = [];
flours[0] = "Rose";
flours[1] = "Lily";
flours[2] = "Tulip";


//Accessing array 
//entire array
console.log(cars);
//can access perticular element with index
console.log(flours[1]);
//accessing first element 
console.log(cars[0]);
//accessing last element
console.log(cars[cars.length-1]);


//typeof array is object
console.log(typeof(cars));


//JavaScript arrays can have values of different datatypes
const array = ["Hello, World!", 3.14, true, null];
console.log(array);
