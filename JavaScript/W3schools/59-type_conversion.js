//JavaScript Type Conversion
//JavaScript variables can be converted to a new variable and another data type:
//By the use of a JavaScript function.
//Automatically by JavaScript itself.

//converting string to number
console.log("converting to number");
console.log(Number("3.14"));
console.log(Number(Math.PI));
console.log(Number(" "));
console.log(Number(""));
console.log(Number("99 88"));
console.log(Number("John"));

//Unary + operator is use to convert a variable to a number:
console.log("Unary operator");
let a = "5";
let b = + a;
console.log(typeof(b));
let c = "John";
let d = + c;
console.log(typeof(d));

//converting numbers to string
console.log("converting to string")
let e = 55;
console.log(typeof(String(e)));
console.log(typeof(String(123)));
console.log(typeof(String(100 + 25)));
//toString() - method does same.
console.log(typeof(e.toString()));
console.log(typeof((133).toString()));
console.log(typeof((200 + 100).toString()));

//converting Dates to Number
console.log("converting dates");
let f = new Date();
console.log(Number(f));
//getTime() - method does same
let g = new Date();
console.log(g.getTime());
//converting Dates to String
let h = String(Date());
console.log(typeof(h));
console.log(typeof(h.toString()));

//converting to Boolean
console.log("converting to boolean");
console.log(Number(false));
console.log(Number(true));
console.log(String(false));
console.log(String(true));
console.log(typeof(false.toString()));
console.log(typeof(true.toString()));

//Automatic Type Conversion
console.log(5 + null);
console.log("5"+ null);
console.log("5" + 2);
console.log("5" - 2);
console.log("5" * 2);

//JavaScript automatically calls the variable's toString() function when you try to "output" an object or a variable:
