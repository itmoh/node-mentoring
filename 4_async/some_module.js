
// The Asyncronous Method
exports.sum = function (x, y, callback) {   
  if(typeof x !== 'number') {
    callback( new Error('First argument is not a number') );
    return;
  }
  if(typeof y !== 'number') {
    callback( new Error('Second argument is not a number') );
    return;
  }
  var result = x + y;
  setTimeout(function() {
    callback(null, result);
  }, 500);
}
