'use strict';
/**
 * Make an EventEmitter that
 *
 * Example:
 * var instance = new EventEmitter();
 * var counter = 0;
 * instance.on('increment', function() {
 *   counter++;
 * }); // counter should be 0
 * instance.trigger('increment'); // counter should be 1
 * instance.trigger('increment'); // counter should be 2
 *
 *
 * Caveats:
 * - If we repeatedly call .on with the same event name, it should
 *   continue to call the old function(s) as well.  That is to say, we can have multiple
 *   listeners for one event.
 * - If `obj.trigger` is called with additional arguments, pass those to the
 *   listeners.
 * - It is not necessary to write a way to remove listeners.
 */

function EventEmitter() {
    this.store = {};
}

EventEmitter.prototype.on = function(funcName, func) {
  if (!this.store[funcName]) {
    this.store[funcName] = [];
}
this.store[funcName].push(func);

  console.log(this.store);
};

EventEmitter.prototype.trigger = function(funcName, ...args) {
//   this.store[funcName];
  console.log(typeof this.store[funcName]);
  this.store[funcName].forEach ( e => e(...args));

};

var instance = new EventEmitter();
var counter = 0;
instance.on('increment', function() {
    counter++;
 }); // counter should be 0
 
 instance.trigger('increment'); // counter should be 1
//  instance.trigger('increment'); // counter should be 2

module.exports = EventEmitter;
