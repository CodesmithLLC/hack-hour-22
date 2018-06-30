/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */
class Stack {
  constructor() {
    this.length = 0;
    this.store = {};
    this.max = -Infinity;
  }
  push(x) {
    if (x > this.max.val) this.max.val = x;
    this.store[this.length] = x;
    return this.length++;
  }
  pop() {
    if (this.length < 1) return undefined;
    const popped = this.store[this.length - 1];
    delete this.store[this.length - 1];
    this.length -= 1;
    return popped;
  }
  getMax() {
    if (this.length < 1) return undefined;
    return this.max;
  }
}

module.exports = Stack;