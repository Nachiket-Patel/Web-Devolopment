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