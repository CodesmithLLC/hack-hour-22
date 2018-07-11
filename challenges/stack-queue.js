/**
 * Create a stack.Then create a queue using two stacks.
 */
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
module.exports = { Stack: Stack, Queue: Queue };
