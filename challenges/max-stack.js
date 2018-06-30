/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.storage = {};
  this.index = 0;
  this.maxVal = -Infinity;
}

Stack.prototype.push = function(val){
  if (val > this.maxVal){
    this.maxVal = val;
  }
  this.storage[this.index] = val;
  this.index += 1;
}

Stack.prototype.pop = function(){
  let lastItem = this.storage[this.index-1];
  delete this.storage[this.index-1];
  this.index -= 1;
  if (this.maxVal === lastItem){
    this.maxVal = Math.max(...Object.values(this.storage));
  }
  return lastItem;
}

Stack.prototype.getMax = function(){
  return this.maxVal;
}



module.exports = Stack;

// let stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(7);
// stack.push(5);
// stack.push(8);
// stack.pop();
// stack.pop();
// console.log(stack.getMax());
