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
LinkedList.prototype.add = function(val) {
  let newNode = new Node(val);
  if (this.head === null) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    let pointer = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.tail.prev = pointer; 
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let current = this.head;
  while (current) {
    if (this.head.val === val) {
      this.head = current.next;
      this.head.prev = null;
    } else if (this.tail.val === val) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else if (current.val === val) {
      current.prev.next = current.next;
      current.next.prev = current.prev;
    }
    current = current.next;
  }
  return
};

module.exports = LinkedList;
