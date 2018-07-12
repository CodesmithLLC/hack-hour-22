/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage = {};
  this.index = 0;
}
Stack.prototype.push = function(value) {
  this.storage[this.index++] = value;
}

Stack.prototype.pop = function() {
  const output = this.storage[this.index - 1];
  delete this.storage[this.index - 1];
  this.index -= 1;
  return output; 
}


const myStack = new Stack;
myStack.push(5);
myStack.push('ryan');
myStack.push('thornberry');
myStack.pop();

console.log(myStack.storage, 'index', myStack.index);
/**
* Queue Class
*/


function Queue() {

}

module.exports = {Stack: Stack, Queue: Queue};
