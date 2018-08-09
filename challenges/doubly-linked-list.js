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
  // empty list
  if (!this.head) {
    this.head = this.tail = new Node(val);
    return;
  }
  
  // nonempty list, create and append new node
  const newNode = new Node(val);
  newNode.prev = this.tail;
  this.tail.next = newNode;
  this.tail = newNode;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  // search for val
  let curr = this.head;
  while (curr && val != curr.val)
    curr = curr.next;
  
  // if we didn't find the val, exit
  if (!curr) return;
  
  // left node should point to the right, if it exists
  if (curr.prev) {
    curr.prev.next = curr.next;
    
    // readjust tail if necessary
    if (curr === this.tail) this.tail = curr.prev;
  }
  // right node should point to the left, if it exists
  if (curr.next) {
    curr.next.prev = curr.prev;
    
    // readjust head if necessary
    if (curr === this.head) this.head = curr.next;
  }
};


/* testing */

// LinkedList.prototype.printDouble = function() {
//   const values = [];
// 
//   let curr = this.head;
//   while (curr) {
//     values.push(curr.val);
//     curr = curr.next;
//   }
// 
//   const backValues = [];
//   curr = this.tail;
//   while (curr) {
//     backValues.unshift(curr.val);
//     curr = curr.prev;
//   }
// 
//   console.log(values);
//   console.log(backValues);
// };
// 
// const list = new LinkedList();
// list.add(2);
// list.add(3);
// list.add(4);
// list.add(5);
// list.add(7);
// list.printDouble();
// 
// list.remove(6);
// list.printDouble();
// 
// list.remove(5);
// list.printDouble();
// 
// list.remove(7);
// list.printDouble();
// 
// list.remove(2);
// list.printDouble();

module.exports = LinkedList;

