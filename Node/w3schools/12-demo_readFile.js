//! This example do not work
var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    //Open a file on the server and return its content
    fs.readFile('11-demofile.html', function(err, data) {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);

//? Run this file and open this url for result: http://localhost:8080
