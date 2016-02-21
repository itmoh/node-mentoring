var test = require('../module1');
test.log('load module3');
exports.log = function(msg) {
    console.log(msg);
}

exports.error = function(msg) {
    console.log(msg);
}