//matchAll() - match all string
//can use regular expression and is case-sensitive
console.log("matchAll()");
let d = "Cats are pet. Cats have four legs and Cats are smart animal";
console.log(d.matchAll("Cats"));
console.log(d.matchAll(/cats/gi));


//includes() - if string found return true otherwise return false
//include() is case-sensitive
console.log("includes()");
let e = "Hello world, welcome to the universe.";
console.log(e.includes("world"));
//second parameter is for starting to search string
console.log(e.includes("world" ,15));


//startsWith() - return true if string specific string is found in start otherwise false
//it is case-sensitive
console.log("startsWith()")
let f = "Hello world, welcome to the universe. and this is planet earth";
console.log(f.startsWith("Hello"));
console.log(f.startsWith("world"));

// can give second parameter for starting of string
console.log(f.startsWith("world", 6));


//endsWith() - return true if string specific string is found in start otherwise false
//it is case-sensitive
let g = "Harry Potter";
console.log(g.endsWith("Potter"));
console.log(g.endsWith("Potter" ,16));
 