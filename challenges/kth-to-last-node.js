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

function kthToLastNode(k, head, top = true) {
  if (k < 1) return undefined;

  const capture = {
    reverseIndex: 1,
    value: undefined,
  };
  if (head.next !== null) {
    Object.assign(capture, kthToLastNode(k, head.next, false));
    capture.reverseIndex += 1;
  }

  if (k === capture.reverseIndex) capture.value = head.value;
  return top ? capture.value : capture;
}

module.exports = { Node, kthToLastNode };
