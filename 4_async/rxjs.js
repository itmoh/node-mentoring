var Rx = require('rx');
var Q = require('Q');
var someModule = require('./some_module');
var oSum = Rx.Observable.fromNodeCallback(someModule.sum);


var test = Rx.Observable
    .from([2, 3, -2, 'test'])
    .map(function (value) { return Rx.Observable.return(value).delay(500); })
    .concatAll()
    .filter(function(item) {
      return (typeof item === 'number');
    })
    .map(function(item) {
      if(typeof item !== 'number') {
        throw new Error('item is not a number');
      }
      return item;
    })
    .scan(function(x, y) {
        if(typeof x !== 'number') {
          throw new Error('First argument is not a number');
        }
        if(typeof y !== 'number') {
           throw new Error('Second argument is not a number');
        }
        return x + y;
    }, 1);

test.subscribe(
  data => {
    console.log(data);
  },
  error=> {
    console.log('ErrorMessage:' + error);
  });