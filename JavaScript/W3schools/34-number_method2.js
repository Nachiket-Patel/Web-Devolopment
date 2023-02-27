//Examples of Number() method:
console.log("Examples of Number() method")
console.log(Number(true));
console.log(Number(false));
console.log(Number("10"));
console.log(Number("  10"));
console.log(Number("10  "));
console.log(Number(" 10  "));
console.log(Number("10.33"));
console.log(Number("10,33"));
console.log(Number("10 33"));
console.log(Number("John"));

//Number.isInteger() - return true if it is interger otherwise return false
let m = 5.25;
console.log(Number.isInteger(m));


//POSITIVE_INFINITY
let n = Number.POSITIVE_INFINITY;
console.log(n);
let o = 1 / 0;
console.log(o);

//NEGATIVE_INFINITY
let u = Number.NEGATIVE_INFINITY;
console.log(u);
let y = -1 / 0;
console.log(y);
