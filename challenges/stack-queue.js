/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
   this.storage = {};
   this.index = 0;
}

Stack.prototype.push = function (val) {
   this.storage[this.index] = value;
   this.index++;
};

Stack.prototype.pop = function () {
   const lastElement = this.storage[this.index - 1];
   delete this.storage[this.index - 1];
   this.index--;
   return lastElement;
};



/**
* Queue Class
*/


function Queue() {
   this.storage = {};
   this.index = {};
}

Queue.prototype.enqueue = function (value) {
   this.storage[this.index] = value;
   this.index++;
}

module.exports = { Stack: Stack, Queue: Queue };
