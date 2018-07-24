/**
 * Create a stack.Then create a queue using two stacks.
 */

function Stack() {
  this.storage = {};
  this.length = 0;
}

Stack.prototype.push = function (value) {
  this.storage[this.length++] = value;
  return this.length;
};

Stack.prototype.pop = function () {
  const popped = this.storage[this.length - 1];
  if (this.length > 0) delete this.storage[--this.length];
  return popped;
};

/**
* Queue Class
*/

function Queue() {
  this.in = new Stack();
  this.out = new Stack();
}

Queue.prototype.enqueue = function (value) {
  this.in.push(value);
};

Queue.prototype.dequeue = function () {
  if (!this.out.length) {
    while (this.in.length) this.out.push(this.in.pop());
  }
  return this.out.pop();
};

module.exports = { Stack: Stack, Queue: Queue };
