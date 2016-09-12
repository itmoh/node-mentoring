var Q = require('Q');
//https://github.com/kriskowal/q/wiki/API-Reference
//
var someModule = require('./some_module');
var qSum = Q.denodeify(someModule.sum);

Q({ x: 1, y: 2 })
    .then(qSum)
    .then(function(result) {
        console.log(result);
        return { x: result, y: 3 };
    })
    .then(qSum)
    .then(function(result) {
        console.log(result);
        return { x: result, y: -2 }
    })
    .then(qSum)
    .then(function(result) {
        console.log(result);
        return [result, 'test'];
    })
    .then(qSum)
    .catch(function(error) {
        console.log(error);
    });
