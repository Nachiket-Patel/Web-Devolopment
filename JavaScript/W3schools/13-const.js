//can not redefined
const pi = 3.14; // variable are given value when they declare
//pi = 3.1416; // error
console.log(pi);

//let and var can define first and then later can given value
let a;
a = 10;
console.log(a);
//const value needs to give otherwise it will show error
//const b;
b = 20;
console.log(b);


const x = 10;
console.log(x);
// Here x is 10
{
    const x = 2;
    console.log(x);
    // Here x is 2
}
console.log(x);
// Here x is 10


//allowed and not allowed
var y = 2;     // Allowed
var y = 3;     // Allowed
y = 4;         // Allowed

var z = 2;     // Allowed
const z = 2;   // Not allowed
{
    let z = 2;     // Allowed
    const z = 2;   // Not allowed
}
{
    const z = 2;   // Allowed
    const z = 2;   // Not allowed
}


//redeclaring is not allowed in same scope but in different scope allowed
const p = 2;
console.log(p);
{
    const p = 3;
    console.log(p);
}
{
    const p = 4;
    console.log(p);
}