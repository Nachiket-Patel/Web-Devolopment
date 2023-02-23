/*All string methods return a new string. They don't modify the original string.
Formally said:
Strings are immutable: Strings cannot be changed, only replaced.
*/

//Extracting String Parts
//slice()
let text = "Apple, Banana, Kiwi";
console.log(text.slice(7, 13));
console.log(text.slice(4));
console.log(text.slice(-12));
console.log(text.slice(-12,-6));


//uppercase and lowercase
let a = "Hello, World!";
console.log(a.toUpperCase());
console.log(a.toLowerCase());


//string replace
//replace only change first and one string only not all
//replace is case sensitive
let b = "Hello, World!";
console.log(b.replace("World", "Nachiket"));

//use /string/i for replace to case-insensitive
let c = "Please, visit Google";
console.log(c.replace(/GOOGLE/i, "Amazon"));

//use /string/g for replace all strings not only one
let d = "Google is leading in AI chatbots, ChatGPT-3 is created by Google.";
console.log(d.replace(/Google/g, "Microsoft"));

//replaceAll() method can be use for replacing all strings.
//replaceAll() is case-sensitive
let e = "dogs are pets, and dogs have four legs."
console.log(e.replaceAll("dogs", "cats"));
