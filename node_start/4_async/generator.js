var Q = require('Q');
var someModule = require('./some_module');

var qSum = Q.denodeify(function(params, callback)  {
    return someModule.sum(params[0], params[1], callback);
});

function* test() {
    try {
        var result = yield Q.when([1,2]).then(qSum);
        console.log(result);
        result = yield Q.when([result, 3]).then(qSum);
        console.log(result);
        result = yield Q.when([result, -2]).then(qSum);
        console.log(result);
        result = yield Q.when([result, 'test']).then(qSum);
    } catch(err) {
        console.log(err);
    }
}
var generator = test();
var result = generator.next().value
.then(function(result) {
    return generator.next(result).value;
})
.then(function(result) {
    return generator.next(result).value;
})
.then(function(result) {
    return generator.next(result).value;
})
.catch(function(result) {
    return generator.throw(result).value;
})
//Q.async(test)().done();


//
// var array = [1, 2, 3];
// function* someIterator() {
//     var index = 0;
//     var currentItem = array[index];
//     while (currentItem) {
//         var result = yield Q.when(currentItem).delay(1000);//yield currentItem;
//         console.log(result);
//         index++;
//         var currentItem = array[index];
//     }
//     return currentItem;
// }
//
// Q.async(someIterator)().done();
