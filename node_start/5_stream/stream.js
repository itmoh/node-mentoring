var fs = require('fs');

/******read stream*******/
// var stream = fs.createReadStream('data.csv');
// stream.on('readable', function() {
//     var data = stream.read();
//     console.log(data);
//     if (data) {
//         console.log(data.toString());
//     }
// });
// stream.on('end', function() {
//     console.log('end');
// })


/*****write stream*******/
// var writableModuleStream = fs.createWriteStream('module.txt');
// writableModuleStream.on('drain', () => {
//     console.log('drain');
// });
// writableModuleStream.write(JSON.stringify(module, null, '\t'));
// writableModuleStream.end();


/*******pipe******/

var writableModuleStream = fs.createWriteStream('module.txt');
var stream = fs.createReadStream('data.csv');
stream.on('readable', onFileRead);
stream.on('end', function() {
    writableModuleStream.end();
});

function onFileRead() {
    var data = stream.read();
    if (data && !writableModuleStream.write(data)) {
        stream.removeListener('readable', onFileRead);
        writableModuleStream.once('drain', function() {
            stream.on('readable', onFileRead);
            onFileRead();
        });
    }
}
