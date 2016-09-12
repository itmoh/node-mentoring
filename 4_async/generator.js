var Q = require('Q');
var co = require('co');
var someModule = require('./some_module');

var qSum = Q.denodeify(someModule.sum);

function* test() {
    try {
        var result = yield qSum({x: 1, y: 2});
        console.log(result);
        result = yield qSum({x: result, y: 3});
        console.log(result);
        result = yield qSum({x: result, y: -2});
        console.log(result);
        result = yield qSum({x: result, y: 'test'});
    } catch(err) {
        console.log(err);
    }
};

co(test);
