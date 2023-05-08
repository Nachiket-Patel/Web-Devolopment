//* This method is use for both create and update files.
var fs = require('fs');

//create a file named example_of_writeFile.txt:
fs.writeFile('example_of_writeFile.txt', 'Hello Content!', function(err) {
    if(err){
        throw err;
    }
    console.log("create new file or replace text");
});

//? //? check out new file 'example_of_writeFile.txt' is create and "Hello, World!" text is added in file.
//? if file is already exits than replace exiting text with new text.
