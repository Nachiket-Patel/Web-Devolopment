//Array iteration methods operate on every array item.

const numbers = [45, 4, 9, 16, 25];

//forEach() - calls a function (a callback function) once for each array element
console.log("forEach()");
let a = 0;
numbers.forEach(myFunction);
function myFunction(a1){
    a = a1;
    console.log(a);
}


//map() - method creates a new array by performing a function on each array element.
//map() method does not execute the function for array elements without values.
//map() method does not change the original array.
console.log("map()");
const numbers2 = numbers.map(myFunction2);
function myFunction2(b){
    return b*2;
}
console.log(numbers2);


//filter() method creates a new array with array elements that pass a test.
console.log("filter()");
const over18 = numbers.filter(myFunction3);
function myFunction3(c){
    return c>18;
}
console.log(over18);


//reduce() method runs a function on each array element to produce (reduce it to) a single value.
//reduce() method works on left to right.
//reduce() method does not reduce the original array.
console.log("reduce()");
const sum = numbers.reduce(myFunction4);
function myFunction4(total,d){
    return total + d;
}
console.log(sum);

//reduceRight() - works same as reduce but right to left.
console.log("reduceRight()");
const sum2 = numbers.reduceRight(myFunction5);
function myFunction5(total2,d2){
    return total2 + d2;
}
console.log(sum2);
