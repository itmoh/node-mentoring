var Q = require('Q');
//https://github.com/kriskowal/q/wiki/API-Reference
//
var someModule = require('./some_module');
var qSum = Q.denodeify(function(params, callback)  {
    return someModule.sum(params[0], params[1], callback);
});

Q.Promise(function(resolve) {
    resolve([1, 2]);
})
.then(qSum)
.then(function(result) {
    console.log(result);
    return [result, 3];
})
.then(qSum)
.then(function(result) {
    console.log(result);
    return [result, -2];
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

