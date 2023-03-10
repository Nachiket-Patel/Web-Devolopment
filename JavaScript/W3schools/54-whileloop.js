//Loops can execute a block of code as long as a specified condition is true.

//While loop
//while loop loops through a block of code as long as a specified condition is true.
let i = 0;
var text = "";
while(i<=10){
    text += "The number is " + i;
    i++;
}
console.log(text);


//Do-while loop
//The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.
let j = 11;
var txt = "";
do {
    txt += "The number is " + j;
    j++;
  }
  while (j < 10);
console.log(txt);
