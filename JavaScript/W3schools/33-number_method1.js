//toString() - return number as string
let a = "123";
b = a.toString();
console.log(typeof(b));

//toExponential() - Returns a number written in exponential notation
let c = 3.1416;
d = c.toExponential(5);
console.log(d);

//toFixed() returns a string, with the number written with a specified number of decimals
let e = 5.5863224;
f = e.toFixed(3);
console.log(f);

//toPrecision() returns a string, with a number written with a specified length
let g = 3.21;
h = g.toPrecision(5);
console.log(h);


//Converting variables to Number
//Number() - for converting other datatypes to number
let i = true;
let j = "HELLO";
console.log(Number(i));
console.log(Number(j));

//parseFloat() - convert to floating point number
let k = "5.2";
console.log(parseFloat(k));
console.log(typeof(parseFloat(k)));

//parseInt() - convert to integer number
let l = 6.65;
console.log(parseInt(l));
console.log(typeof(parseInt(l)));
