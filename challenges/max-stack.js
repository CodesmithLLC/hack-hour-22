/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.stack = [];
}

Stack.prototype.push = function (element) {
  this.stack[this.stack.length] = element;
}

Stack.prototype.pop = function () {
  this.stack.length = this.stack.length - 1;

  return this.stack[this.stack.length - 1];
}

Stack.prototype.getMax = function () {
  let max = this.stack.reduce((acc, curr) =>  Math.max(acc, curr));
  return max;
}

module.exports = Stack;