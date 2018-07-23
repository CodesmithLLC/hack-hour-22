/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage = {};
  this.index = 0;
}

Stack.prototype.push = function(value) {
  this.storage[this.index] = value;
  this.index++;
  return this.storage;
}

Stack.prototype.pop = function() {
  let popValue = this.storage[this.index - 1];
  delete this.storage[this.index - 1];
  this.index--;
  return popValue;
}

/**
* Queue Class
*/

function Queue() {
  this.storage = {};
  this.length = 0;
}

Queue.prototype.enqueue = function(value) {
  this.storage[this.length] = value;
  this.length++;
}

Queue.prototype.dequeue = function() {
  let indices = Object.keys(this.storage);
  let deleted = this.storage[this.indices[0]];
  delete this.storage[indices[0]];
  return deleted;
}

module.exports = {Stack: Stack, Queue: Queue};
