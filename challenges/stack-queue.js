/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.contents = {};
  this.length = 0;
}

Stack.prototype.push = function push(val) {
  this.contents[this.length] = val;
  this.length += 1;
  return this.length;
};

Stack.prototype.pop = function pop() {
  if (this.length === 0) return undefined;

  const temp = this.contents[this.length - 1];
  delete this.contents[this.length - 1];
  this.length -= 1;
  return temp;
};


/**
* Queue Class
*/


function Queue() {
  this.inStack = new Stack();
  this.outStack = new Stack();
}

Queue.prototype.enqueue = function enqueue(val) {
  this.inStack.push(val);
  return this.inStack.length;
};

Queue.prototype.dequeue = function dequeue() {
  if (this.inStack.length === 0) return undefined;

  while (this.inStack.length > 0) {
    this.outStack.push(this.inStack.pop());
  }
  const temp = this.outStack.pop();
  while (this.outStack.length > 0) {
    this.inStack.push(this.outStack.pop());
  }
  return temp;
};

module.exports = { Stack, Queue };
