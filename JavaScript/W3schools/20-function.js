a = addition(3,1);
function addition(a, b){
    return a+b;
}
b = addition("Hello," + " World!");
console.log(a);
console.log(b);
console.log(typeof(b));

c = function(g,h){
    return g*h;
}
console.log(c(5,5));


//same variable can be use in different functions
function multi(){
    let x = 10;
    return x*5;
}
d = multi();
console.log(d);

function div(){
    let x = 100;
    return x/10;
}
e = div();
console.log(e);