//trim() method is use for removing whitespaces from string
let f = "   Hello   ";
console.log(f.trim());
//trimStart() - remove whitespace form start of string
let g = "       World";
console.log(g.trimStart());
//trimEnd() - remove whitespace from end of string
let h = "JavaScript         ";
console.log(h.trimEnd());


// String padding
//padStart()
let a = "2";
console.log(a.padStart(5,"x"));//add 4 x at start
//padEnd()
let b = "5";
console.log(b.padEnd(5,"z"));//add 4 z at end


//charAt()
let c = "Hello, World!";
console.log(c.charAt(5));
// character can be access with index too
console.log(c[0]);


//split()
let d = "THis is paragraph, This is first line. This is second line. this is thrid line";
let lines = d.split(".");
let words = d.split(" ");
let symbols = d.split(",");
console.log(lines);
console.log(words);
console.log(symbols);