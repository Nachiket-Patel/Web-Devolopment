var http = require('http');
var dt = require('./4-my_first_module');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end("");
}).listen(8080);

//? Run this file and open this url for result: http://localhost:8080