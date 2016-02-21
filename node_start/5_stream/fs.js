//var fs = require('fs');
// var writableModuleStream = fs.createWriteStream('module.txt');
// writableModuleStream.write(JSON.stringify(module, null, '\t'));
//console.log(process);

/*****meet pipe************/
// var fs = require('fs')
// var argv = process.argv;
// var fileName = argv[2];
// fs.createReadStream(fileName)
//   .pipe(process.stdout);


/****input uotput*****/

// process.stdin.pipe(process.stdout);

/****Transform********/
// var through = require('through2');
//
// var transformStream = through(write);
//
// function write(buffer, encoding, next) {
//   var string = buffer.toString();
//   var result = string.toUpperCase();
//   this.push(result);
//   next();
// }
//
// process.stdin.pipe(transformStream).pipe(process.stdout);


/*********Lines*****************/
//
// var split = require('split');
// var through = require('through2');
// var toLower = true;
// process.stdin
//   .pipe(split())
//   .pipe(through( function(buffer, encoding, next) {
//       var string = buffer.toString();
//       var result = (toLower) ? string.toLowerCase() : string.toUpperCase();
//       toLower = !toLower;
//       this.push(result);
//       this.push('\n');
//       next();
//   }))
//   .pipe(process.stdout);

/*******Concat********/
//
// var concat = require('concat-stream');
// process.stdin.pipe(concat(function(body) {
//   var result = body.toString().split('').reverse().join('');
//   process.stdout.write(result);
// }));