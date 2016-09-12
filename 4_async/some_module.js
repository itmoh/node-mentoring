
/**
 * Find sum of 2 numbers.
 * @param {Object} config - method configuration.
 * @param {Number} config.x - first argument.
 * @param {Number} config.y - second argument.
 * @param {Function} callback - callback function.
 */
exports.sum = function (config, callback) {
  if(typeof config.x !== 'number') {
    callback( new Error('First argument is not a number') );
    return;
  }
  if(typeof config.y !== 'number') {
    callback( new Error('Second argument is not a number') );
    return;
  }
  var result = config.x + config.y;
  var timeoutId = setTimeout(function() {
    callback(null, result);
  }, 500);

  return {
    dispose: function() {
      if (timer) {
        clearTimeout(timeoutId);
        timer = null;
      }
    }
  }
}
