//random() - returns random number  between 0 (inclusive),  and 1 (exclusive).
let a = Math.random();
console.log(a);
//random() always returns a number lower than 1.

//Math.random() used with Math.floor() can be used to return random integers.
let b = Math.floor(Math.random()*10);
console.log(b);


//This JavaScript function always returns a random number between min (included) and max (excluded)
function min_notmax(min,max){
    return Math.floor(Math.random() * (max - min) + min);
}

//This JavaScript function always returns a random number between min and max (both included)
function min_max(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}
