//Everything With a "Value" is True
//even string false is also true.
let x = "false";
console.log(Boolean(x));

//Everything Without a "Value" is False
//examples:
let a = 0;
console.log(Boolean(a));
let b = -0;
console.log(Boolean(b));
let c = "";
console.log(Boolean(c));
let d;
console.log(Boolean(d));
let e = null;
console.log(Boolean(e));
let f = false;
console.log(Boolean(f));
let g = 10 / "Hello";
console.log(Boolean(g));