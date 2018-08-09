/*
Create a doubly linked list with an add and remove method
 */

function LinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

/*
Adds a node to the end of the list
 */
LinkedList.prototype.add = function add(val) {
  this.length += 1;

  if (!this.head) {
    this.head = this.tail = new Node(val); // eslint-disable-line no-multi-assign
  } else {
    this.tail.next = new Node(val);
    this.tail.next.prev = this.tail;
    this.tail = this.tail.next;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function remove(val) {
  if (!this.head) return false;

  let current = this.head;
  if (current.val === val) {
    if (this.head === this.tail) {
      this.head = this.tail = null; // eslint-disable-line no-multi-assign
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.length -= 1;
    return true;
  }
  while (current.next) {
    if (current.next.val === val) {
      current.next = current.next.next;
      if (current.next) {
        current.next.prev = current;
      } else {
        this.tail = current;
      }
      this.length -= 1;
      return true;
    }
    current = current.next;
  }
  return false;
};

module.exports = LinkedList;
