/*
* Node.js as a File Server
The Node.js file system module allows you to work with the file system on your computer.
To include the File System module, use the require() method:
*/
var fs = require('fs'); //! file system module

/*
* Common use for the File System module:
Read files
Create files
Update files
Delete files
Rename files
Upload files
*/


/*
* Read Files
The fs.readFile() method is used to read files on your computer.
Assume we have the following HTML file (located in the same folder as Node.js)

* example of html file:
<html>
<body>
<h1>My Header</h1>
<p>My paragraph.</p>
</body>
</html>

? Create a Node.js file that reads the HTML file, and return the content:
*/
//* example:
var http = require('http');
var fs = require('fs');
http.createServer(function(req, res) {
    //Open a file on the server and return its content
    fs.readFile('nameOfHtmlFile.html', function(err, data) {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);

//? Open file '12-demo_readFile.js' for example. 


/*
* Create Files
The File System module has methods for creating new files:
fs.appendFile()
fs.open()
fs.writeFile()
*/

//* fs.appendFile()
// The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created.
//example: Create a new file using the appendFile() method
var fs = require('fs');
//create a file named fileName.txt:
fs.appendFile('fileName.txt', "Hello Content!", function(err) {
    if(err){
        throw err;
    }
    console.log('Saved!');
});

//? Open file '13-demo_appendFile.js1' and '14-demo_appendFile.js2' for example.

//* fs.open()
//The fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. If the file does not exist, an empty file is created.
//example: Create a new, empty file using the open() method
var fs = require('fs');
//create an empty file named fileName.txt:
fs.open('fileName.txt', 'w', function(err, file) {
    if(err){
        throw err;
    }
    console.log('Saved!');
});

//? Open file '15-demo_open.js' for example.

//* fs.writeFile()
//The fs.writeFile() method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created
var fs = require('fs');
//create a file named fileName.txt:
fs.writeFile('fileName.txt', "Hello Content!", function(err) {
    if(err){
        throw err;
    }
    console.log('Saved!');
});

//? Open file '16-demo_writeFile1.js' and '17-demo_writeFile2.js' for example.
