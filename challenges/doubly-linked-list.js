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
  let current = new Node(val)
  if (!this.head) {
    this.head = current;
  } else {
    this.tail.next = current;
    current.prev = this.tail;
  }
  this.tail = current;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let current = this.head;
  let prev;
  while (current) {
    if (current.val === val) {
      if (current.prev) {
        current.prev.next = current.next;
      }
      if (current.next) {
        current.next.prev = current.prev;
      }
      return current;
    } else {
      prev = current;
      current = current.next
    }
  }
  return false;
};

module.exports = LinkedList;
