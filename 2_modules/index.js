var module1 = require('./module1');
var module2 = require('./module2');
var module3 = require('./module3');
var module4 = require('module4');
var logger = new module2();

module1.log('test');
logger.log('test2');
module3.log('test3');
module4.log('test4')
