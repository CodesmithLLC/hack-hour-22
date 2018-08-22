/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */
class Stack {
  constructor() {
    this.max = null;
    this.values = {};
    this.length = 0;
  }

  push(val) {
    const index = this.length;
    if (val) this.values[index] = val;
    this.max = this.max ? Math.max(val, this.max) : val;
    this.length += 1;
    return this.length;
  }

  pop() {
    if (!this.length) return undefined;
    const index = this.length - 1;
    const value = this.values[index];
    delete this.values[index];
    if (this.max === value) {
      this.max = Math.max(...Object.values(this.values));
    }
    this.length -= 1;
    return value;
  }

  getMax() {
    return this.max;
  }
}

module.exports = Stack;
