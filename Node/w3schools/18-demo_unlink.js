//! This example do not work
var fs = require('fs');

//Delete the file fileName.txt:
fs.unlink('fileName.txt', function(err) {
    if(err) {
        throw err;
    }
    console.log("File Delete!");
});
