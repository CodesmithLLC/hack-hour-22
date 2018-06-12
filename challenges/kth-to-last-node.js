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
  if (!head || !head.next || typeof k !== 'number') return undefined;
  let temp = head;
  const arr = [head];
  while (temp.next) {
    temp = temp.next;
    arr.push(temp);
  }
  const index = arr.length - k;
  if (arr[index] && arr[index].value) return arr[index].value;
  return undefined;
}

module.exports = { Node, kthToLastNode };
