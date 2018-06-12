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
  let current = head;
  let listLength = 1;

  while(current.next) {
    current = current.next;
    listLength++;
  }

  if(k === 0) {
    return current.value;
  }

  if(k > listLength) {
    return undefined;
  }

  const kthToLastIndex = listLength - k;
  let counter = 0;
  let kthToLastVal;
  let newCurrent = head;

  while(counter < kthToLastIndex) {
    newCurrent = newCurrent.next;
    counter += 1;
  }

  return newCurrent.value;  
}


const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(kthToLastNode(6, a));


module.exports = {Node: Node, kthToLastNode: kthToLastNode};
