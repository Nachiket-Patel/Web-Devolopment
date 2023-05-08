//* This method works for both create and update files.
var fs = require('fs');

//This will create file 'example_of_appendFile.html' 
fs.appendFile('example_of_appendFile.html', '<html><body><h1>Hello, World!</h1></body></html>', function(err) {
    if(err){
        throw err;
    }
    console.log("Create new file or add text");
});

//? check out new file 'example_of_appendFile.html' is create and "Hello, World!" text is added in file.
//? if file is already exits than add text again.
