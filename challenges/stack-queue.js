/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
    this.count = 0;
    this.storage = {};
}

Stack.prototype.push = (val) => {
    this.storage[this.count] = val;
    this.count++;
    return this.count;
}

Stack.prototype.pop = () => {
    if (this.count === 0) return undefined;
    let result = this.storage[this.count - 1];
    delete this.storage[this.count - 1];
    this.count -= 1;
    return result;
}

Stack.prototype.size = () => {
    return this.count;
}

Stack.prototype.isEmpty = () => {
    return this.storage.length == 0;
}



/**
* Queue Class
*/



function Queue() {
	this.inStack = new Stack();
	this.outStack = new Stack();
}

Queue.prototype.enqueue = (val) => {
	this.inStack.push(val);
	return this.inStack.length;
}

Queue.prototype.dequeue = () => {
	if (this.inStack.length === 0) return undefined;

	while (this.inStack.length > 0) {
		this.outStack.push(this.inStack.pop());
	}
	const temp = this.outStack.pop();
	while (this.outStack.length > 0) {
		this.inStack.push(this.outStack.pop());
	}
	return temp;
}


module.exports = { Stack, Queue };
