/**
 * Create a stack.Then create a queue using two stacks.
 */


class Stack {
  constructor() {
    this.values = {};
    this.length = 0;
  }

  pop() {
    if (this.length === 0) return this.length;
    const value = this.values[this.length - 1];
    delete this.values[this.length - 1];
    this.length -= 1;
    return value;
  }

  push(val) {
    this.values[this.length] = val;
    this.length += 1;
    return this.length;
  }
}


/**
* Queue Class
*/


class Queue {
  constructor() {
    this.storage = new Stack();
  }

  dequeue() {
    this.storage.pop();
  }

  queue(val) {
    const pushStack = new Stack();
    pushStack.push(val);
    this.storage.push(pushStack.pop());
  }
}

module.exports = { Stack, Queue };
