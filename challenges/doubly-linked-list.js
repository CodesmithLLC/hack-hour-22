/*
Create a doubly linked list with an add and remove method
 */

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

/*
Adds a node to the end of the list
 */
LinkedList.prototype.add = (val) => {
  const node = new Node(val);
  const curr = this.head;
  if (curr === null) {
    curr = node; 
    this.tail = null;
  } else if (this.tail === null) {
    this.tail = node;
    this.head.next = this.tail;
    this.tail.prev = this.head; 
  } else {
    const prevTail = this.tail;
    const newTail = node;
    newTail.prev = prevTail;
    prevTail.next = newTail;
    this.tail = newTail;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = (val) => {
  const curr = this.head; 
  while (curr !== null) {
    let data = new Node(val);
    if (curr.val === data) {
      delete curr.val;
      curr.next = data.next;
    }
  }
};

module.exports = LinkedList;
