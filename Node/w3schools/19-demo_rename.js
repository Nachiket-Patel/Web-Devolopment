//! first create file if don't exits otherwise it will show and error.
var fs = require('fs');

//Rename the file "changefilename.txt" into "newfilename.txt":
fs.rename('changefilename.txt', 'newfilename.txt', function(err) {
    if(err){
        throw err;
    }
    console.log("File Renamed!");
});

//? first create file name 'changefilename.txt' and run file it will change file name to 'newfilename.txt'
