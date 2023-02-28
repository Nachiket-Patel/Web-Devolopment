//The sort() method sorts an array alphabetically
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort());
//The reverse() method reverses the elements in an array.
console.log(fruits.reverse());

//sort() only works for strings but does not work on numbers
//There are other ways to sort numbers in JavaScript
/* By default, the sort() function sorts values as strings.
This works well for strings ("Apple" comes before "Banana").
However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
Because of this, the sort() method will produce incorrect result when sorting numbers. */
const points = [40, 100, 1, 5, 25, 10];
//shows wrong result
console.log(points.sort());
//accending order
a = points.sort(function(a, b){return a - b});
console.log(a);
//decendign order
b = points.sort(function(a, b){return b - a});
console.log(b);

/* The Compare Function
The purpose of the compare function is to define an alternative sort order.
The compare function should return a negative, zero, or positive value, depending on the arguments:
function(a, b){return a - b}
When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.
If the result is negative, a is sorted before b.
If the result is positive, b is sorted before a.
If the result is 0, no changes are done with the sort order of the two values.

Example:
The compare function compares all the values in the array, two values at a time (a, b).
When comparing 40 and 100, the sort() method calls the compare function(40, 100).
The function calculates 40 - 100 (a - b), and since the result is negative (-60),  the sort function will sort 40 as a value lower than 100 */


//Find Max or Min in array first sort it than get first or last number
max = console.log(b[0]);
min = console.log(b[b.length - 1]);

//function for finding Max
function myArrayMax(arr) {
    let len = arr.length;
    let max = -Infinity;
    while (len--) {
        if (arr[len] > max) {
            max = arr[len];
        }
    }
    return max;
}

//function for finding Min
function myArrayMin(arr) {
    let len = arr.length;
    let min = Infinity;
    while (len--) {
        if (arr[len] < min) {
            min = arr[len];
        }
    }
    return min;
}