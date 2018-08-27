//* Create a stack.Then create a queue using two stacks.

const Stack = (args) => {
  this.items = [];
  return {
    push: function (item) {
      this.items.push(item);
    },
    pop: function () {
      return this.items.pop();
    },
    empty: function () {
      return this.items.length
    }
  }
}
/**
* Queue Class
*/
const Queue = () => {
  this.in = new Stack();
  this.out = new Stack();
  return {
    enqueue: function (item) {
      this.in.push(item);
    },
    dequeue: function () {
      if (this.out.empty()) {
        while (!this.in.empty()) { this.out.push(this.in.pop()) }
      }
      return this.out.pop();
    }
  }
}




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
