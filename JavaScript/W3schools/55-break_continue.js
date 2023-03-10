//break statement "jumps out" of a loop.
//continue statement "jumps over" one iteration in the loop.
//The break and the continue statements are the only JavaScript statements that can "jump out of" a code block.

//example of continue
for(let i=0; i<10; i++){
    if(i==5){
        console.log("This will skip 5");
        continue;
    }
    console.log(i);
}

//example of break;
for(let j=10; j>=0; j--){
    if(j==6){
        console.log("Now loop will stop");
        break;
    }
    console.log(j);
}
