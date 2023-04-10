//Hyphens can be mistaken as subtraction attempts. Hyphens are not allowed in JavaScript names.
//Do not start names with a $ sign. It will put you in conflict with many JavaScript library names.
//Do not use tabs (tabulators) for indentation. Different editors interpret tabs differently.

/*
JavaScript Coding Conventions

Coding conventions are style guidelines for programming. They typically cover:
Naming and declaration rules for variables and functions.
Rules for the use of white space, indentation, and comments.
Programming practices and principles.

Coding conventions secure quality:
Improve code readability
Make code maintenance easier

Coding conventions can be documented rules for teams to follow, or just be your individual coding practice.
*/


/*
Variable Names
At W3schools we use camelCase for identifier names (variables and functions).
All names start with a letter.
At the bottom of this page, you will find a wider discussion about naming rules.
*/
firstName = "John";
lastName = "Doe";
price = 19.90;
tax = 0.20;
fullPrice = price + (price * tax);


//Spaces Around Operators
//Always put spaces around operators ( = + - * / ), and after commas:
let x = y + z;
const myArray = ["Volvo", "Saab", "Fiat"];


//Code Indentation
//Always use 2 spaces for indentation of code blocks:
function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}


//Statement Rules
//General rules for simple statements:
//Always end a simple statement with a semicolon.


/*
General rules for complex (compound) statements:
Put the opening bracket at the end of the first line.
Use one space before the opening bracket.
Put the closing bracket on a new line, without leading spaces.
Do not end a complex statement with a semicolon.
*/


/*
Object Rules

General rules for object definitions:
Place the opening bracket on the same line as the object name.
Use colon plus one space between each property and its value.
Use quotes around string values, not around numeric values.
Do not add a comma after the last property-value pair.
Place the closing bracket on a new line, without leading spaces.
Always end an object definition with a semicolon.
*/
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};


/*
Naming Conventions

Always use the same naming convention for all your code. For example:
Variable and function names written as camelCase
Global variables written in UPPERCASE (We don't, but it's quite common)
Constants (like PI) written in UPPERCASE

Should you use hyp-hens, camelCase, or under_scores in variable names?

This is a question programmers often discuss. The answer depends on who you ask:

Hyphens in HTML and CSS:
HTML5 attributes can start with data- (data-quantity, data-price).
CSS uses hyphens in property-names (font-size).
*/


/*
Underscores:
Many programmers prefer to use underscores (date_of_birth), especially in SQL databases.
Underscores are often used in PHP documentation.

PascalCase:
PascalCase is often preferred by C programmers.

camelCase:
camelCase is used by JavaScript itself, by jQuery, and other JavaScript libraries.
*/


/*
File Extensions
HTML files should have a .html extension (.htm is allowed).
CSS files should have a .css extension.
JavaScript files should have a .js extension.
*/


/*
Use Lower Case File Names
Most web servers (Apache, Unix) are case sensitive about file names:
london.jpg cannot be accessed as London.jpg.
Other web servers (Microsoft, IIS) are not case sensitive:
london.jpg can be accessed as London.jpg or london.jpg.
If you use a mix of upper and lower case, you have to be extremely consistent.
If you move from a case insensitive, to a case sensitive server, even small errors can break your web site.
To avoid these problems, always use lower case file names (if possible).
*/


/*
Performance
Coding conventions are not used by computers. Most rules have little impact on the execution of programs.
Indentation and extra spaces are not significant in small scripts.
For code in development, readability should be preferred. Larger production scripts should be minimized.
*/
