function EventEmitter() {

}

EventEmitter.prototype.on = function(funcName, func) {
  if (!this[funcName]) {
    this[funcName] = [];
  }
  this[funcName].push(func);
};

EventEmitter.prototype.trigger = function(funcName) {
  var args = Array.prototype.slice.call(arguments, 1);
  if (this[funcName]) {
    for (var i = 0; i < this[funcName].length; i++) {
      this[funcName][i].apply(this, args);
    }
  }
};
