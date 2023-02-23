/*Synonyms:
Template Literals
Template Strings
String Templates
Back-Tics Syntax
*/

//use to define string ` instead of '' or "".
console.log(`Hello, World!`);
// can use "" and '' in string without escape character / 
console.log(`He's often called "Johnny"`);

//allow multiline strings
let text =
`The quick
brown fox
jumps over
the lazy dog`;
console.log(text);


/*Interpolation
Template literals provide an easy way to interpolate variables and expressions into strings.

The method is called string interpolation.

The syntax is:

${...}
*/


//Variable Substitutions
//Template literals allow variables in strings:
let firstName = "John";
let lastName = "Doe";
let fullname = `Welcome ${firstName}, ${lastName}!`;
console.log(fullname);
//Automatic replacing of variables with real values is called string interpolation.


//Expression Substitution
//Template literals allow expressions in strings:
let price = 10;
let VAT = 0.25;
let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
console.log(total);
