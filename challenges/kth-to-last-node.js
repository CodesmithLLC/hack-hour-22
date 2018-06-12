/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  let behind = head, ahead = head;
  let i = 1;
  while (ahead.next && i < k) {
    ahead = ahead.next;
    i++;
  }
  
  if (i < k) return;
  
  while (ahead.next) {
    behind = behind.next;
    ahead = ahead.next;
  }
  
  return behind.value;
}

/*
const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(kthToLastNode(1, a)); // E
console.log(kthToLastNode(2, a)); // D
console.log(kthToLastNode(5, a)); // A
console.log(kthToLastNode(6, a)); // undefined
*/


module.exports = {Node: Node, kthToLastNode: kthToLastNode};

