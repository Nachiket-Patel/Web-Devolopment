var a = 5;

for(let i=0; i<10; i++){
    var b = i+a;
    let c = i+a;
}
console.log(b);
//console.log(c); this will show error.

//There is difference between using var and let.
//using var
var i = 5;
for (var i = 0; i < 10; i++) {
  // some code
}
console.log(i);

//using let
let j = 5;
for (let j = 0; j < 10; j++) {
    // some code
}
console.log(j);
