a = addition(3,1);
function addition(a, b){
    return a+b;
}
b = addition("Hello," + " World!");
console.log(a);
console.log(b);
console.log(typeof(b));

//same variable can be use in different functions
function multi(){
    let x = 10;
    return x*5;
}
c = multi();
console.log(c);

function div(){
    let x = 100;
    return x/10;
}
d = div();
console.log(d);