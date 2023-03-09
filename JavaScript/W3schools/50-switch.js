//The switch statement is used to perform different actions based on different conditions.
//When JavaScript reaches a break keyword, it breaks out of the switch block.
//If you omit the break statement, the next case will be executed even if the evaluation does not match the case.
//The default keyword specifies the code to run if there is no case match:

//switch uses === Strict Comparison.
//values must be of the same type to match, A strict comparison can only be true if the operands are of the same type.

let a = 5;
let b = "4";

//change a and b to see output result
switch(b){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("There is no day");
}
