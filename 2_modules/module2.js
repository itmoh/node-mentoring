Loger.prototype.log = function(msg) {
    this.times++;
    console.log(this.times + ':' + msg);
}

Loger.prototype.error = function(msg) {
    this.times++;
    console.error(this.times + ':' + msg);
}

function Loger() {
    this.times = 0;
}
module.exports = Loger;