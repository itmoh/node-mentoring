var EventEmitter = require('events');
var emitter = new EventEmitter();
var listener = (arg) => {console.log(arg);};
emitter.on('test', listener);
setTimeout(function() {
    emitter.emit('test', 'Hello world');
    emitter.removeListener('test', listener);
    emitter.emit('test', 'Hello world');
}, 1000);

