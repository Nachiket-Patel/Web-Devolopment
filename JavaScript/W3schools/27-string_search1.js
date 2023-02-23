//indexOf and lastIndexOf() use for searching string
//can take second parameter for starting search but can not use regular expessions
//indexOf()
let a = "Please locate where 'locate' occurs!";
console.log(a.indexOf("locate"));

//lastIndexOf()
console.log(a.lastIndexOf("locate"));

//if string can not found both indexOf() and lastIndexOf() return -1
console.log(a.indexOf("john"));
console.log(a.lastIndexOf("john"));

//both method take second parameter as to start searching from there
console.log(a.indexOf("locate", 15));
console.log(a.lastIndexOf("locate", 15));//lastIndexOf start searching from end to start.

//both indeOf() and lastIndexOf() are case-sensitive
console.log(a.indexOf("lOcaTe"));
console.log(a.lastIndexOf("LoCatE"));


//search() - is use for searching string
//can not take second parameter for starting search but can use regular expression
console.log("search()");
let b = "this is use of search method so we can find string";
console.log(b.search("search"));
console.log(b.search(/find/));


//match() - is use for searching string
//match is case-sensitive
//match can use regular expression
// it return array as output
console.log("match()");
let c = "The rain in SPAIN stays mainly in the plain";
console.log(c.match("SPAIN"));

//match is case-sensitive
console.log(c.match("spain"));//null

//match() - regular expression
console.log(c.match(/rain/));

// /g for global search, /i for case-insensitive and /gi
console.log(c.match(/a/gi));
