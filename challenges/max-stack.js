/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.storage = {};
  this.index = 0;
  this.max = -Infinity;

  this.push = num => {
    this.storage[this.index] = num;
    this.index++;
    if (num > this.max) {
      this.max = num;
    }
    return this.index;
  };

  this.pop = () => {
    console.log(this.storage);
    const popped = this.storage[this.index - 1];
    delete this.storage[this.index - 1];
    if (popped === this.max) {
      const newMax = -Infinity;
      for (let i = 0; i < this.storage[index]; i++) {
        if (this.storage[index] > newMax) {
          newMax = this.storage[index];
        }
      }
      this.max = newMax;
    }
    this.index--;
    return popped;
  };

  this.getMax = () => {
    return this.max;
  };
}

module.exports = Stack;
