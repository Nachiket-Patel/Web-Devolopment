//JavaScript Math object allows you to perform mathematical tasks on numbers.
//Unlike other objects, the Math object has no constructor.
//Math object is static.
//All methods and properties can be used without creating a Math object first.
console.log("examples of Math");
console.log(Math.E);        // returns Euler's number
console.log(Math.PI);       // returns PI
console.log(Math.SQRT2);    // returns the square root of 2
console.log(Math.SQRT1_2);  // returns the square root of 1/2
console.log(Math.LN2);      // returns the natural logarithm of 2
console.log(Math.LN10);     // returns the natural logarithm of 10
console.log(Math.LOG2E);    // returns base 2 logarithm of E
console.log(Math.LOG10E);   // returns base 10 logarithm of E


//round() - rounded to nearest integer
console.log("round()");
console.log(Math.round(5.4));
console.log(Math.round(5.5));
console.log(Math.round(5.6));

//ceil() - rounded to up to its integer
console.log("ceil()");
console.log(Math.ceil(4.2));
console.log(Math.ceil(4.5));
console.log(Math.ceil(4.8));
console.log(Math.ceil(-4.5));

//floor() - rounded to down to its integer
console.log("floor()");
console.log(Math.floor(3.2));
console.log(Math.floor(3.5));
console.log(Math.floor(3.8));
console.log(Math.floor(-3.5));


//trunc() - returns the integer part
console.log("trunc()");
console.log(Math.trunc(1.2));
console.log(Math.trunc(1.5));
console.log(Math.trunc(1.8));
console.log(Math.trunc(-1.5));


//sign() - return negative, null or positive
console.log("sign()");
console.log(Math.sign(-4));
console.log(Math.sign(4));
console.log(Math.sign(0));
