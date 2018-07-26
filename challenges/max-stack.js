/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.data = [];
  this.max = -Infinity;
}

Stack.prototype.push = function(value) {
  this.data.push(value);
  if (value > this.max) this.max = value;
  
  return this.data.length;
};

Stack.prototype.pop = function() {
  const value = this.data.pop() || -Infinity;
  
  if (value === this.max) {
    this.max = -Infinity;
    this.data.forEach(el => {
      if (el > this.max) this.max = el;
    })
  }
  
  return value;
};

Stack.prototype.getMax = function() {
  return this.max;
};

module.exports = Stack;

