const fruits = ["Banana", "Orange", "Apple", "Mango"];

//push() - adding element to array, need to give argument
fruits.push("Watermelon");
console.log(fruits);
//pop() - to delete last element
fruits.pop();
console.log(fruits);


//toString() - convert array into string
a = fruits.toString();
console.log(typeof(a));

//join() method also joins all array elements into a string.
//It behaves just like toString(), but in addition you can specify the separator
b = fruits.join(" - ");
console.log(b);
console.log(typeof(b));


//add and remove element at first
//shift() method removes the first array element and "shifts" all other elements to a lower index
console.log(fruits.shift());
console.log(fruits);

//The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements
//need to give argument
console.log(fruits.unshift("Lemon"));
console.log(fruits);
