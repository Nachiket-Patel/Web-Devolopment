//Iterating - It simply means looping over a sequence of elements.

//Iterating Over a String
const a = "W3schools";
for(let x in a){
    console.log(a[x]);
}

//Iterating Over an Array
const letters = ["a", "b", "c"];
for(var y in letters){
    console.log(letters[y]);
}

//Iterating over a set
const letter = new Set(["a","b","c"]);

for (const z of letter) {
    console.log(z);
}

//Iterating over a map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);
  
for (const i of fruits) {
    console.log(i);
}
