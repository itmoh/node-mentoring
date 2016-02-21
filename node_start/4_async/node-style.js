// var fs = require('fs');
//
// fs.readFile('/foo.txt', function(err, data) {
//   // TODO: Error Handling Still Needed!
//   console.log(data);
// });


var someModule = require('./some_module');
someModule.sum(1, 2, function(err, result) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
    someModule.sum(result, 3, function(err, result) {
        if (err) {
            console.log(err);
            return;
        }
        console.log(result);
        someModule.sum(result, -2, function(err, result) {
            if (err) {
                console.log(err);
                return;
            }
            console.log(result);
            someModule.sum(result, 'test', function(err, result) {
                console.log(err);
            });
        });
    });
});