/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.storage = {};
  this.index = 0;
  this.max = -Infinity;
}

Stack.prototype.push = function(value) {
  this.storage[this.index] = value;
  this.index += 1;
  if (value > this.max) this.max = value;
  return this.index;
}

Stack.prototype.pop = function() {
  const outputValue = this.storage[this.index - 1];
  if (outputValue === this.max) {
    this.max = Math.max(...this.storage.values());
  }
  delete this.storage[this.index - 1];
  this.index -= 1;
  return outputValue;
}

Stack.prototype.getMax = function() {
  return this.max;
}

module.exports = Stack;