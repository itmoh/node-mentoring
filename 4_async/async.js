var async = require('async');
var someModule = require('./some_module');
//https://github.com/caolan/async
//
async.waterfall([
    function(callback) {
        callback(null, 1, 2);
    },
    someModule.sum,
    function(result, callback) {
        console.log(result);
        callback(null, result, 3);
    },
    someModule.sum,
    function(result, callback) {
        console.log(result);
        callback(null, result, -2);
    },
    someModule.sum,
    function(result, callback) {
        console.log(result);
        callback(null, result, 'test');
    },
    someModule.sum
], function (err, result) {
    console.log(err);
});