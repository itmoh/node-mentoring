// Load module dependencies
var http = require('http'),
    fs = require('fs');

http.createServer(function(request, response) {

    // TODO: Find the ASYNCHRONOUS, NON-BLOCKING API for reading in a file.
    fs.readFile('./data.csv', 'utf-8', function(err, data) {
        var responseData = {};

        // Basic JS: Work with the data in the file, and create the response
        var lines = data.split('\n');

        // Note the native forEach support in Arrays in node.js!
        lines.forEach(function(line) {
            var parts = line.split(',');
            responseData[parts[0]] = parts[1];
        });

        // TODO: How do we set the content type we're sending back?
        response.writeHead(200, {
            'Content-Type':'application/json'
        });

        // TODO: How do we serialize responseData to a JSON string?
        response.end(JSON.stringify(responseData));

    });

}).listen(3000);

console.log('node server running on port 3000');







/*********HTTP server*****************/

// var http = require('http');
// var through = require('through2');
// var transformStream = through(write);
//
// var server = http.createServer(function(req, res) {
//     if (req.method === 'POST') {
//         req.pipe(transformStream).pipe(res);
//     }
//     else res.end('send me a POST\n');
// });
// server.listen(process.argv[2]);
//
// function write(buffer, encoding, next) {
//   var string = buffer.toString();
//   var result = string.toUpperCase();
//   this.push(result);
//   next();
// }

/********HTTP CLIENT*******/
var request = require('request');

var post = request.post('http://localhost:8099');
process.stdin.pipe(post);
post.pipe(process.stdout);