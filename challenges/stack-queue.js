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
}

Stack.prototype.pop = (val) => {
    if (this.count === 0) return undefined;
    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
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

function Node(data) {
    this.data = data;
    this.next = null;
}

function Queue() {
    this.head = null;
    this.tail = null;
}

Queue.prototype.enqueue = (data) => {
    let newNode = new Node(data);

    if (this.head === null) {
        this.head = newNode;
        this.tail = newNode;
    } else {
        this.tail.next = newNode;
        this.tail = newNode;
    }
}

Queue.prototype.dequeue = () => {
    let newNode;
    if (this.head !== null) {
        newNode = this.head.data;
        this.head = this.head.next;
    }
    return newNode;
}

Queue.prototype.print = () => {
    let current = this.head;
    while (current) {
        console.log(current.data);
        current = current.next;
    }
}

module.exports = {Stack: Stack, Queue: Queue};
