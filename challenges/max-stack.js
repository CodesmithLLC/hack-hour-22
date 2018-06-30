/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

class Stack {
  constructor() {
    this.stack = [];
    this.length = 0;
  }

  push(e) {
    this.stack.push(e);
    this.length += 1;
    return this.length;
  }

  pop() {
    const output = this.stack[this.length - 1];
    this.stack.pop();
    this.length -= 1;
    return output;
  }

  getMax() {
    let max = -Infinity;
    this.stack.forEach((e) => {
      if (e > max) max = e;
    });
    return max;
  }
}

module.exports = Stack;

// Tests
// let stack = new Stack();
// console.log(stack.push(1));
// console.log(stack.push(9));
// console.log(stack.push(4));
// console.log(stack.getMax());
// console.log(stack.pop());