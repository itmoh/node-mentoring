// var fs = require('fs');
//
// fs.readFile('/foo.txt', function(err, data) {
//   // TODO: Error Handling Still Needed!
//   console.log(data);
// });
var someModule = require('./some_module');

someModule.sum({ x: 1, y: 2 }, function(err, result) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
    someModule.sum({ x: result, y: 3 }, function(err, result) {
        if (err) {
            console.log(err);
            return;
        }
        console.log(result);
        someModule.sum({ x: result, y: -2 }, function(err, result) {
            if (err) {
                console.log(err);
                return;
            }
            console.log(result);
            someModule.sum({ x: result, y: 'test' }, function(err, result) {
                console.log(err);
            });
        });
    });
});