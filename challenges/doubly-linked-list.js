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
  const newNode = new Node(vale);
  if(!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  const newNode = new Node(val);
  const curr = this.head;

  while(curr) {
    if(curr.value === val){
      if(!curr.next) {
        curr.prev.next = null;
        curr.prev = this.tail;
      } else {
        curr.prev.next = curr.next;
        curr.next.prev = curr.prev;
        return;
      }
    }
    curr = curr.next;
  }
};

module.exports = LinkedList;
