//string can be empty
var a = "";
console.log(typeof(a));

//length of string
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(text.length);

// use \n for new line
let b = "new_line\n"
console.log(a);

//string as object
let x = "Hello\n";
let y = new String("Hello");
console.log(typeof(x));
console.log(typeof(y));
//Comparing JavaScript objects always returns false.
console.log(x==y);
console.log(x===y);
let z = new String("Hello");
console.log(y==z);
console.log(y===z);
