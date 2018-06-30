/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.storage = {};
  this.index = 0;
}

Stack.prototype.push = function(value) {
  this.storage[this.index] = value;
  this.index++
}

Stack.prototype.pop = function() {
  let deletedItem = this.storage[this.index - 1];
  delete this.storage[this.index - 1];
  this.index--;
  return deletedItem;
}

Stack.prototype.getMax = () => {
  return this.storage.reduce((a, b) => Math.max(a, b))
};


module.exports = Stack;