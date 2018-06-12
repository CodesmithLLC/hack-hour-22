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
  // make sure k exists
  if (k === undefined) {
    console.log('Select another number');
  }

  // create vals array
  let nextNode = head.next;
  const vals = [head.value];

  // loop through node and push vals in array
  while(nextNode) {
    vals.push(nextNode.vals)
    nextNode = nextNode.next
  }

  // subtract kth from last element in vals array
  return vals[vals.length - k]
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
