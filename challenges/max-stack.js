/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack(val) {
  this.storage = [];

  return {
    push : (val) => {
      this.storage[this.storage.length] = val;
      return this.storage; 
      },
    
    pop: () => {
      const poppedElement = this.storage.slice(-1);
      this.storage = this.storage.slice(0, -1)
      return poppedElement;
      },
    getMax: () => {
      this.storage.sort();
      const max = this.storage[this.storage.length-1];
      return max;
    },

  }
}
let x = new Stack;
module.exports = Stack;