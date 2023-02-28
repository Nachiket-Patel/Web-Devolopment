//Elements can be object too.
function add(){
    return "Addition";
}
function sub(){
    return "subtraction";
}
a = 15.5;
const array_object = [Date.now, add(), sub(), a];


//find length of array
console.log(array_object.length);

//Looping through arrray
const fruits = ["Banana", "Orange", "Apple", "Mango"];
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i] + " is at index of " + i);
}
//or can use Array_name.forEach() - that also iterate over all elements
fruits.forEach(element =>  {
    console.log(element);
});

//push() - adding element to array
fruits.push("Watermelon");
console.log(fruits);
//pop() - to delete last element
fruits.pop();
console.log(fruits);


//Array.isArray(array_name) - return true if it is array otherwise return false
console.log(Array.isArray(fruits));
//another method is use of instanceof
console.log(fruits instanceof Array);


/*WARNING !!
If you use named indexes, JavaScript will redefine the array to an object.
After that, some array methods and properties will produce incorrect results.*/

//In JavaScript, arrays use numbered indexes.  
//In JavaScript, objects use named indexes.

//JavaScript does not support associative arrays.
//You should use objects when you want the element names to be strings (text).
//You should use arrays when you want the element names to be numbers.
