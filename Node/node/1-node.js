//* How node differs from Vanilla JS
//1) Node runs in server not in browser.
//2) Global object instead of window object.
console.log(global);
//3) Node has lot of modules that we can use but they can be acess with commonJS modules.
//4) Node is missing so APIs like fetch.

const os = require('os');

console.log(os.type());
console.log(os.version());
console.log(os.homedir());

console.log(__dirname);
console.log(__filename);


const path = require('path');
console.log(path.dirname(__filename)); //same as __dirname
console.log(path.basename(__filename));
console.log(path.extname(__filename));

console.log(path.parse(__filename));


const math = require('./2-math');
console.log(math.add(10,5));
console.log(math.sub(10,5));
console.log(math.multi(10,5));
console.log(math.div(10,5));

// or import destructuring 
const { add, sub, multi, div } = require('./2-math');
console.log(add(50,10));
console.log(sub(50,10));
console.log(multi(50,10));
console.log(div(50,10));
