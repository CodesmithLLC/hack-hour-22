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

	this.push = (val) => {
		this.storage[this.index] = val;
		this.index ++;
		return this.index;
	}

	this.pop = () => {
		if (this.index === 0) return;
		this.index --;
		let temp = this.storage[this.index];
		delete this.storage[this.index];
		return temp;
	}

	this.getMax = () => {
		if (this.index === 0) return;
		let max = this.storage[0];
		for (let i = 0; i < this.index; i++) {
			if (max < this.storage[i]) max = this.storage[i];
		}
		return max;
	}
}


module.exports = Stack;