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

LinkedList.prototype.add = function(val) {
  // create a new node and tack it on the end
  const newNode = new Node(val);
  this.tail.next = newNode;

  // adjust the prev pointer
  newNode.prev = this.tail;

  // make that the new tail
  this.tail = newNode;
};

LinkedList.prototype.remove = function(val) {
  // set a current node to the head
  const current = this.head;

  // iterate through the list
  while (current) {
    if (current.val === val) {
      // if it's the head
      if (current === this.head) {
        current.next.prev = null;
        this.head = current.next;
        // if it's the tail
      } else if (current === this.tail) {
        current.prev.next = null;
        this.tail = current.prev;
        // all other cases
      } else {
        current.next.prev = current.prev;
        current.prev.next = current.next;
      }
      // step out after removing
      return;
    }
    current = current.next;
  }
};
function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

LinkedList.prototype.add = function(val) {
  // create a new node and tack it on the end
  const newNode = new Node(val);
  this.tail.next = newNode;

  // adjust the prev pointer
  newNode.prev = this.tail;

  // make that the new tail
  this.tail = newNode;
};

LinkedList.prototype.remove = function(val) {
  // set a current node to the head
  const current = this.head;

  // iterate through the list
  while (current) {
    if (current.val === val) {
      // if it's the head
      if (current === this.head) {
        current.next.prev = null;
        this.head = current.next;
        // if it's the tail
      } else if (current === this.tail) {
        current.prev.next = null;
        this.tail = current.prev;
        // all other cases
      } else {
        current.next.prev = current.prev;
        current.prev.next = current.next;
      }
      // step out after removing
      return;
    }
    current = current.next;
  }
};

/* Without tail
function LinkedList(val) {
  this.head = new Node(val);
}

function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

LinkedList.prototype.add = function(val) {
  var newNode = new Node(val);
  var temp = this.head;
  while (temp.next) {
    temp = temp.next;
  }
  temp.next = newNode;
  newNode.prev = temp;
}

LinkedList.prototype.remove = function(val) {
  var temp = this.head;
  while (temp && temp.val !== val) {
    temp = temp.next;
  }

  if (temp) {
    if (temp === this.head) {
      temp.next.prev = null;
      this.head = temp.next;
    } else {
      temp.prev.next = temp.next;
      if (temp.next) temp.next.prev = temp.prev;
    }
  }
};
*/

module.exports = LinkedList;
