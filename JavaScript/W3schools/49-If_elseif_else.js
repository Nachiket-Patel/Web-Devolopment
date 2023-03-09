// Importing the realine-sync module
const readline = require("readline-sync");

console.log("Enter input: ");
let num = Number(readline.question());

if(num == 0){
    console.log("Zero\n");
}
else if(num > 0){
    console.log("Positive number\n");
}
else{
    console.log("Negative number\n");
}