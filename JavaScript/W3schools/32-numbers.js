//Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number.
let myNumber = 2;
// Execute until Infinity
while (myNumber != Infinity) {
  myNumber = myNumber * myNumber;
  console.log(myNumber);
}

//Division by 0 (zero) also generates Infinity:
let g = 2/0;
let h = -2/0;
console.log(g);
console.log(h);


//type of infinity is number
console.log(typeof(Infinity));


//toString() - to output numbers from base 2 to base 36
let number = 32;
console.log(number.toString(36));
console.log(number.toString(32));
console.log(number.toString(16));
console.log(number.toString(12));
console.log(number.toString(10));
console.log(number.toString(8));
console.log(number.toString(2));


//numbers can define as object with new keyword
let j = new Number(123);
let k = 123;
console.log(typeof(j));

console.log(j==k);
console.log(j===k);

let l = new Number(123);
//objects comparison always returns false
console.log(j==l);
console.log(j===l);