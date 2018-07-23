/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.contents = {};
  this.length = 0;
  this.max = -Infinity;
}

Stack.prototype.push = function(element) {
  if (element > this.max) this.max = element;
  this.contents[this.length] = element;
  this.length += 1;

  return this.length;
}

Stack.prototype.pop = function() {
  if (!this.length) return undefined;
  const temp = this.contents[this.length - 1];
  delete this.contents[this.length -1];

  if (temp === this.max) this.max = this.findMax();
  this.length -= 1;
  return temp;
}

Stack.prototype.findMax = function() {
  let newMax = -Infinity;
  for (let i = 0; i < this.length - 1; i += 1) {
    if (this.contents[i] > newMax) newMax = this.contents[i];
  }
  return newMax;
}

Stack.prototype.getMax = function() {
  return this.max;
}

module.exports = Stack;