// Basic - O(n) add
function LinkedList(val) {
  this.head = new Node(val);
}

function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

LinkedList.prototype.add = function(val) {
// Use the value to create a new node
  var newNode = new Node(val);
// Attach the node to the end of the linked list
  var temp = this.head;
  while (temp.next) {
    temp = temp.next;
  }
  temp.next = newNode;
  newNode.prev = temp;
}

LinkedList.prototype.remove = function(val) {
  // Iterate through linked list
  var temp = this.head;
  while (temp && temp.val !== val) {
    temp = temp.next;
  }

  // If we encounter the value, remove the node
  if (temp) {
    if (temp === this.head) {
      temp.next.prev = null;
      this.head = temp.next;
    } else {
      temp.prev.next = temp.next;
      // account for removing the tail
      if (temp.next) temp.next.prev = temp.prev;
    }
  }
};


// Doubly linked list with tail - O(k) add

function LinkedList(val) {
  this.head = new Node(val);
  this.tail = this.head;
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
  var node = new Node(val);
  this.tail.next = node;
  node.prev = this.tail;
  this.tail = node;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  var iter = this.head;
  while(iter !== null){
    if (iter.val === val){ //remove node and Return
      if (iter === this.head){
        iter.next.prev = null;
        this.head = iter.next;
      }
      else if (iter === this.tail){
        iter.prev.next = null;
        this.tail = iter.prev;
      }
      else {
        iter.prev.next = iter.next;
        iter.next.prev = iter.prev;
      }
      return;
    }
    iter = iter.next;
  }
};
