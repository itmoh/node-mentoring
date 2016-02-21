var http = require('http'),
    fs = require('fs');
require('dotenv').load();

var port = process.env.SERVER_PORT;
http.createServer(function(request, response) {
    response.end('hello world');
}).listen(port);

console.log('node server running on port ' + port);