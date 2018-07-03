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


SOLUTION:

function Stack() {
  this.length = 0
  this.store = {}
  this.max = {
    val: Number.NEGATIVE_INFINITY
  }
}

Stack.prototype.setNewMax = function () {
  for (let i in this.store) {
    if (this.store[i] > this.max.val) {
      this.max.val = this.store[i]
      this.max.index = i
    }
  }
}

Stack.prototype.resetMax = function () {
  this.max.val = Number.NEGATIVE_INFINITY
  this.max.index = -1
  return
}

Stack.prototype.push = function (v) {
  if (v > this.max.val) {
    this.max.index = this.length
    this.max.val = v
  }
  this.store[this.length] = v
  this.length++
  return this.length
}

Stack.prototype.pop = function () {
  let popped;
  if (this.length === 0) return undefined;
  else {
    popped = this.store[this.length - 1]
    if (popped === this.max.val) {
      this.resetMax()
    }
    delete this.store[this.length - 1]
    this.setNewMax()
  }
  this.length -= 1
  return popped
}

Stack.prototype.getMax = function () {
  return this.length === 0
    ? undefined
    : this.max.val
}

module.exports = Stack;