//JavaScript Numbers are Always 64-bit Floating Point
/* Value        Exponent        Sign
52bits(0-51)    11bits(52-62)   1bit(63)
*/
//Javascript numbers are accurate up to 15 digits.
let a = 123e5;
let b = 123e-5;
console.log(a);
console.log(b);


//common mistakes expect 1025.7530
let c = 10;
let d = 25.75;
let e = "30"
console.log(c+d+e);


//numeric string
//when JavaScript will try to convert strings to numbers in all numeric operations
let f = "100";
let g = "10";
let h = f/g;//works
let j = f*g;//works
let k = f-g;//works
let l = f+g;//only this will not work
console.log(h);
console.log(j);
console.log(k);
console.log(l);


/*
NaN - Not a Number
NaN is a JavaScript reserved word indicating that a number is not a legal number.
Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):
*/

//This is NaN
let a1 = 100/"apple";
console.log(a1);
//This is not NaN
let b1 = 100/"10";
console.log(b1);

//type of NaN is number
console.log(typeof(a1));

//isNaN() - return true if it is NaN otherwise return false
console.log(isNaN(a1));
console.log(isNaN(b1));

//If you use NaN in a mathematical operation, the result will also be NaN
let c1 = NaN;
let d1 = 25;
console.log(c1+d1);
//Or the result might be a string concatenation 
let e1 = NaN;
let f1 = "50";
console.log(e1+f1);
