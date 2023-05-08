//* This method works for both create and update files.
var fs = require('fs');

//This will create file 'example_of_appendFile.txt' 
fs.appendFile('example_of_appendFile.txt', 'Hello, World!', function(err) {
    if(err){
        throw err;
    }
    console.log("Create new file name file.txt");
});

//? check out new file 'example_of_appendFile.txt' is create and "Hello, World!" text is added in file.
//? if file is already exits than add text again.
