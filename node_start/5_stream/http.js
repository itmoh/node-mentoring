// Load module dependencies
var http = require('http'),
    fs = require('fs');

http.createServer(function(request, response) {
    fs.readFile('./data.csv', 'utf-8', function(err, data) {
        var responseData = {};
        var lines = data.split('\n');
        lines.forEach(function(line) {
            var parts = line.split(',');
            responseData[parts[0]] = parts[1];
        });
        response.writeHead(200, {
            'Content-Type':'application/json'
        });
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
// var request = require('request');
//
// var post = request.post('http://localhost:8099');
// process.stdin.pipe(post);
// post.pipe(process.stdout);