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
 * kthToLastNode2, a); -> returns 'D' (the value on the second to last node)
 */
function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.value = val;
  this.next = null;
}


function kthToLastNode(k, head) {
  if (k <= 0) return;
  let first = head;
  let follow = head;

  for (let i = 0; i < k && first; i += 1) {
    first = first.next;
  }

  while (first && follow) {
    first = first.next;
    follow = follow.next;
  }
  return follow.value;
  return first;
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
// const d = new Node('D');
// const e = new Node('E');

console.log(a.next = b);
console.log(b.next = c);
// c.next = d;
// d.next = e;
console.log(a);

console.log(kthToLastNode(2, a));

module.exports = { Node, kthToLastNode };
