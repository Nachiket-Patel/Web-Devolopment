const readline = require('readline-sync');

// * console.log() will make prompt in next line
console.log("Enter name: ");
let name = String(readline.question());
console.log(name);


//* process.stdout.write will keep prompt in same line
process.stdout.write("Enter FullName: ");
let fullName = String(readline.question());
console.log(fullName);