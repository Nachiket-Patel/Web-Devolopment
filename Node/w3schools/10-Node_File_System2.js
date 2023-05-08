/*
* Update Files
The File System module has methods for updating files:
fs.appendFile()
fs.writeFile()
*/

//* fs.appendFile()
//The fs.appendFile() method appends the specified content at the end of the specified file
//Example: Append "This is my text." to the end of the file "fileName.txt".
var fs = require('fs');
//append content at the end of the file
fs.appendFile('fileName.txt', "This is my text.", function(err) {
    if(err){
        throw err;
    }
    console.log('Updated!');
});

//? Open file '13-demo_appendFile.js1' and '14-demo_appendFile.js2' for example.

//* fs.writeFile()
//The fs.writeFile() method replaces the specified file and content
//Example: Replace the content of the file "fileName.txt".
var fs = require('fs');
//Replace the file with a new one.
fs.writeFile('fileName.txt', "This is text file.", function(err) {
    if(err){
        throw err;
    }
    console.log('Replaced!');
});

//? Open file '16-demo_writeFile1.js' and '17-demo_writeFile2.js' for example.

//* Delete Files
//To delete a file with the File System module,  use the fs.unlink() method.

//* fs.unlink()
//The fs.unlink() method deletes the specified file
//Example: delete "fileName.txt"
var fs = require('fs');
//Delete the file fileName.txt:
fs.unlink('fileName.txt', function(err) {
    if(err){
        throw err;
    }
    console.log('File Deleted!');
});


//* Rename Files
//To rename a file with the File System module,  use the fs.rename() method.

//* fs.rename()
//The fs.rename() method renames the specified file
//Example: Rename "fileName.txt" to "newFileName.txt
var fs = require('fs');
//Rename the file "fileName.txt" into "newFileName.txt"
fs.rename('fileName.txt', 'newFileName.txt', function(err) {
    if(err){
        throw err;
    }
    console.log('File Renamed!');
});
