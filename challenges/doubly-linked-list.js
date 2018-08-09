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
  const newNode = new Node(val);
  newNode.prev = this.tail;
  this.tail.next = newNode;
  this.tail = newNode;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let currentNode = this.head
  while (currentNode.val !== val) {
    currentNode = currentNode.next
  }
  currentNode.prev.next = currentNode.next;
  currentNode.next.prev = current.node.prev;
};

module.exports = LinkedList;
