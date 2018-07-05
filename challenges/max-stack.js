/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.items = [1,5,6,8];
  
   this.items.push = (element) => {
    this.items[this.items.length] = element;
    return this.items;
  }
  this.items.pop = (element) => {
    element = this.items[this.items.length-1];
    this.items = this.items.slice(0, this.items.length-1);
    return element;
  }
  this.items.getMax = () => {
    return this.items.reduce((acc, curr) => {
      return acc > curr ? acc : curr;
    });
  }
  console.log(this.items.push());
  return this.items;
}

module.exports = Stack;