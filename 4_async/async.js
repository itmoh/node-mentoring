var async = require('async');
var someModule = require('./some_module');
//https://github.com/caolan/async
//
async.waterfall([
    function(callback) {
        callback(null, { x: 1, y: 2 });
    },
    someModule.sum,
    function(result, callback) {
        console.log(result);
        callback(null, { x: result, y: 3 });
    },
    someModule.sum,
    function(result, callback) {
        console.log(result);
        callback(null, { x: result, y: -2 });
    },
    someModule.sum,
    function(result, callback) {
        console.log(result);
        callback(null, { x: result, y: 'test' });
    },
    someModule.sum
], function (err, result) {
    console.log(err);
});