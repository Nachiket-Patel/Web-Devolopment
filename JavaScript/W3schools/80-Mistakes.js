//This chapter points out some common JavaScript mistakes.

//Accidentally Using the Assignment Operator instead of equality operator.
//This mistake will make condition won't work as expected.
let a = 0;
if(a = 10){
    console.log("In if");
}


//Expecting Loose Comparison use equality == instead of strict equality ===
//Switch case always uses strict equality.
let b = "10";
if(b == 10){
    console.log("equality operator will allow");
}

if(b === 10){
    console.log("strict equality will not allow");
}


/*
Confusing Addition & Concatenation
Addition is about adding numbers.
Concatenation is about adding strings.
In JavaScript both operations use the same + operator.
Because of this, adding a number as a number will produce a different result from adding a number as a string:
*/
let c = 5;
c += "10";
console.log(c);


/*
Misunderstanding Floats
All numbers in JavaScript are stored as 64-bits Floating point numbers (Floats).
All programming languages, including JavaScript, have difficulties with precise floating point values:
*/
let d1 = 0.1;
let d2 = 0.2;
let d3 = d1 + d2;
console.log(d3);

//this method will solve in-precise floating point values.
let d4 = (d1 * 10 + d2 * 10) / 10;
console.log(d4);


/*
Never break a return statement.

Breaking a Return Statement
It is a default JavaScript behavior to close a statement automatically at the end of a line.
Because of this, these two examples will return the same result:
*/
let e = function myFunction(a) {
    let
    power = 10; 
    return
    a * power;
}//this doesn't work


/*
Undefined is Not Null
JavaScript objects, variables, properties, and methods can be undefined.
In addition, empty JavaScript objects can have the value null.
This can make it a little bit difficult to test if an object is empty.
You can test if an object exists by testing if the type is undefined: */
if(typeof(myObj) === "undefined"){
    console.log("underfined");
}

//But you cannot test if an object is null, because this will throw an error if the object is undefined:
if(typeof(myObj1) === null){
    console.log("This will not print");
}

//To solve this problem, you must test if an object is not null, and not undefined.
//But this can still throw an error:
if (myObj2 !== null && typeof myObj2 !== "undefined"){
    console.log("This will not work");
}
//Because of this, you must test for not undefined before you can test for not null:

if (typeof myObj3 !== "undefined" && myObj3 !== null){
    console.log("This will work, check undefined before null");
}
