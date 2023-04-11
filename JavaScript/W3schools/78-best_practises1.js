//Avoid global variables, avoid new, avoid ==, avoid eval()

//Initializing variables provides an idea of the intended use (and intended data type).

/*
Avoid Global Variables
Minimize the use of global variables.
This includes all data types, objects, and functions.
Global variables and functions can be overwritten by other scripts.
Use local variables instead, and learn how to use closures.

Always Declare Local Variables
All variables used in a function should be declared as local variables.
Local variables must be declared with the var, the let, or the const keyword, otherwise they will become global variables.
*/

/*
Declarations on Top
It is a good coding practice to put all declarations at the top of each script or function.

This will:
Give cleaner code
Provide a single place to look for local variables
Make it easier to avoid unwanted (implied) global variables
Reduce the possibility of unwanted re-declarations
*/
// Declare at the beginning
let firstName, lastName, price, discount, fullPrice;

// Use later
firstName = "John";
lastName = "Doe";

price = 19.90;
discount = 0.10;

fullPrice = price - discount;

/*
Initialize Variables
It is a good coding practice to initialize variables when you declare them.

This will:
Give cleaner code
Provide a single place to initialize variables
Avoid undefined values
*/
// Declare and initiate at the beginning
let firstName1 = "";
let lastName1 = "";
let price1 = 0;
let discount1 = 0;
let fullPrice1 = 0;
const myArray = [];
const myObject = {};


//Declare Objects with const
//Declaring objects with const will prevent any accidental change of type:
let car = {type:"Fiat", model:"500", color:"white"};
car = "Fiat";      // Changes object to string

const car1 = {type:"Fiat", model:"500", color:"white"};
car = "Fiat";      // Not possible

//Declare Arrays with const
//Declaring arrays with const will prevent any accidential change of type:
let cars = ["Saab", "Volvo", "BMW"];
cars = 3;    // Changes array to number

const cars1 = ["Saab", "Volvo", "BMW"];
cars = 3;    // Not possible
