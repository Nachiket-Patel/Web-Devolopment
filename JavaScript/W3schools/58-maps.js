//Map holds key-value pairs where the keys can be any datatype.
//Map remembers the original insertion order of the keys.

//create map with Map() method  
const a = new Map([
    ["apples", 500],
    ["banana", 300],
    ["oranges", 100],
]);
console.log(a);

//create with set() method
const b = new Map();
b.set("a",1);
b.set("b",1);
b.set("c",3);
console.log(b);
//set() method can change values too
b.set("a",50);
console.log(b);

//get() - to get perticular values
console.log(b.get("a"));

//size - return number of elements
console.log(b.size);

//delete() method removes a Map element
b.delete("a");
console.log(b);

//has() - return true if element exits, otherwise return false
console.log(b.has("a"));
console.log(b.has("b"));

//forEach()
a.forEach(function(value, key){
    console.log(key + " = " + value);
});

//entries() - returns an iterator object with the [key, values] in a Map
let text = "";
for(const x of a.entries()){
    text = x;
    console.log(text);
};
