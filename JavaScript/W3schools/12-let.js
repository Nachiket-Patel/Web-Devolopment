// let can not redeclare but var can
var b = "new";
var b = 0;
console.log(b);
let a = "Hello";
let a = 12;


//block scope
{
    let c = 25;
}
console.log(c);//error: c is undefine
{
    var d = 15;
}
console.log(d);


//Redeclaring
var e = 5;
{
    var e = 10;
}
console.log(e);
let f = 12;
console.log(f);
{
    let f = 12.5;
    console.log(f);
}


//allowed or not allowed
var x = 2;   // Allowed
let x = 3;   // Not allowed

{
let x = 2;   // Allowed
let x = 3;   // Not allowed
}

{
let x = 2;   // Allowed
var x = 3;   // Not allowed
}

let x = 2;   // Allowed
{
let x = 3;   // Allowed
}
{
let x = 4;    // Allowed
}


