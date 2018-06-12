/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 */
// const a = new Node('A');
// const b = new Node('B');
// const c = new Node('C');
// const d = new Node('D');
// const e = new Node('E');

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;

/*
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
  this.prev = null;
}

function kthToLastNode(k, head) {
  let storedVal;
  let index = 0;
  while (head.next !== null) {
    let obj = head
    let last;
    head = head.next;
    head.prev = obj;
    obj.next = head
    index++

  }
  let whereYouWant = index - k
  while (head.prev !== null) {
    head = head.prev;
    index--;
    if (index === whereYouWant + 1) {
      return head.value;
    }
  }
}
module.exports = { Node: Node, kthToLastNode: kthToLastNode };