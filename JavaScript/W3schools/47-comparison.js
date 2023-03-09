// == operator  check only value not datatype return true if values are same but don't care about datatypes.
// compare for x = 5
let x = 5;
console.log("== operator");
let a = (x == 8);
console.log(a);
let b = (x == 5);
console.log(b);
let c = (x == "5");
console.log(c);

// === operator check both value and datatype return true if value and datatype are same.
console.log("=== operator");
let d = (x === 5);
console.log(d);
let e = (x === "5");
console.log(e);

// != operator check only value are same or not, don't care about datatypes.
console.log("!= operator");
let f = (x != 8);
console.log(f);

// !== operator check value and datatype are same or not, do care about datatypes.
console.log("!== operator");
let g = (x !== 5);
console.log(g);
let h = (x !== "5");
console.log(h);
let i = (x !== 8);
console.log(i);


//Comparing Different Types
//Comparing data of different types may give unexpected results.
//When comparing a string with a number, JavaScript will convert the string to a number when doing the comparison. An empty string converts to 0. A non-numeric string converts to NaN which is always false.
console.log("Comparing Different Types");
let a1 = (2 < 12);
console.log(a1);
let a2 = (2 < "12");
console.log(a2);
let a3 = (2 < "John");
console.log(a3);
let a4 = (2 > "John");
console.log(a4);
let a5 = (2 == "John");
console.log(a5);
let a6 = ("2" < "12");
console.log(a6);
let a7 = ("2" > "12");
console.log(a7);
//When comparing two strings, "2" will be greater than "12", because (alphabetically) 1 is less than 2.
let a8 = ("2" == "12");
console.log(a8);

/*
Conditional (Ternary) Operator
JavaScript also contains a conditional operator that assigns a value to a variable based on some condition.
Syntax:
variablename = (condition) ? value1:value2 
*/
let age = 15;
let vote = (age < 18) ? "Too young":"Old enough";
