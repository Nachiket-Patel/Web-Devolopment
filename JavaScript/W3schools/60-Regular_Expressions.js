/*A regular expression is a sequence of characters that forms a search pattern.
The search pattern can be used for text search and text replace operations.
A regular expression is a sequence of characters that forms a search pattern.
When you search for data in a text, you can use this search pattern to describe what you are searching for.
A regular expression can be a single character, or a more complicated pattern.
Regular expressions can be used to perform all types of text search and text replace operations.
*/

/*Syntax
  /pattern/modifiers;

Example
  /w3schools/i;

/w3schools/i  is a regular expression.
w3schools  is a pattern (to be used in a search).
i  is a modifier (modifies the search to be case-insensitive).

    i - case-insensitive match
    g - perform global match
    m - perform multiline match


Regular Expression Patterns

Expression	      Description	
[abc]	            Find any of the characters between the brackets.	
[0-9]	            Find any of the digits between the brackets.	
(x|y)	            Find any of the alternatives separated with |.

Metacharacters are characters with a special meaning:
Metacharacter	    Description	
\d	              Find a digit.	
\s	              Find a whitespace character.	
\b	              Find a match at the beginning of a word like this: \bWORD, or at the end of a word              like this: WORD\b.	
\uxxxx	          Find the Unicode character specified by the hexadecimal number xxxx.

Quantifiers define quantities:
Quantifier	      Description	
n+	              Matches any string that contains at least one n.
n*	              Matches any string that contains zero or more occurrences of n.
n?	              Matches any string that contains zero or one occurrences of n.

*/

//search() -  method searches a string for a specified value and returns the position of the match or -1 if search is not found.
let a = "Visit W3schools!";
let b = a.search("W3");
console.log(b);
let c = a.search("w3");
console.log(c);
//now we use /i for case-insensitive
let d = a.search(/w3/i);
console.log(d);

//replace() - method replaces a specified value with another value in a string.
let e = "Visit, Microsoft!";
let f = e.replace("Microsoft", "Google");
console.log(f);
//now we use /g for perform global match
let g = "let's find word find all finds we can find as much possible.";
let h = g.replace(/find/g , "replace");
console.log(h);

//Regular Expression Patterns
let j = "There is a b and c with new a b c abc ab a and c find out."
let k = j.match(/[abc]/g);
console.log(k);

let l = "1234567890987654321";
let q = l.match(/[2-4]/g);
console.log(q);

let w = "re, green, red, green, gren, gr, blue, yellow";
let r = w.match(/red|green/g);
console.log(r);


//test() - It searches a string for a pattern, and returns true or false, depending on the result.
let t = "The best things in life are free!";
let y = /e/.test(t);
console.log(y);


//exec() - It searches a string for a specified pattern, and returns the found text as an object.
//If no match is found, it returns an empty (null) object.
let u = /e/.exec(t);
console.log(u);
