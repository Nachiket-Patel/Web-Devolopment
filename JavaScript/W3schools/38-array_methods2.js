//concat() method creates a new array by merging (concatenating) existing arrays
//The concat() method does not change the existing arrays. It always returns a new array.
//concat() method can take any number of array arguments
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);
console.log(myChildren);


//JavaScript Array splice()
//The splice() method can be used to add new items to an array
/*The first parameter (2) defines the position where new elements should be added (spliced in).
The second parameter (0) defines how many elements should be removed.
The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
The splice() method returns an array with the deleted items. */
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);
fruits.splice(2, 2, "Lemon", "Kiwi");
console.log(fruits);
//use splice() to remove elements without leaving "holes" in the array
fruits.splice(0, 1);
console.log(fruits);


//The slice() method creates a new array.
//The slice() method does not remove any elements from the source array.
const fruit = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruit.slice(3));//it slice form index 3
//slice() can take two arguments first one starting index and second - 1 index element will be slice
const fruit1 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruit1.slice(1, 3));
