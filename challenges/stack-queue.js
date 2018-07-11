/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
 	this.storage = {};
 	this.index = 0;

 	this.push = (val) => {
 		this.storage[this.index] = val;
 		return ++this.index;
 	}

 	this.pop = () => {
 		let temp = this.storage[--this.index];
 		delete this.storage[this.index];
 		return temp;
 	}
}


/**
* Queue Class
*/


function Queue() {
	this.in = new Stack();
	this.out = new Stack();
	this.length = 0;

	this.enqueue = (val) => {
		this.in.push(val);
		return ++this.length;
	}

	this.dequeue = () => {
		while(this.in.index > 0) {
			this.out.push(this.in.pop());
		}
		let temp = this.out.pop();
		while(this.out.index > 0) {
			this.in.push(this.out.pop());
		}
		this.length--;
		return temp;
	}

}

module.exports = {Stack: Stack, Queue: Queue};

