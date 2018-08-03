/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
  this.value = value;
  this.next = null;
  this.prev = null;
}

function reverseLinkedList(head) {
  while (head.next !== null) {
    let obj = head.next;
    obj.prev = head;
    if (obj.next === null) {
      head = obj;
    }
    if (obj.next !== null) {
      obj.next = head;
      head.prev = obj;
    }
  }
  let placeHolder = head;
  while (placeHolder.prev !== null) {
    let obj = head.prev;
    head.next = obj;
    if (obj.prev === null) {
      head = obj
    }
    if (obj.prev !== null) {
      obj.next = obj.prev;
      head = obj.prev;
    }
  }
  head = placeHolder;
  return head;
}
  const a = new Node(1);
  a.next = new Node(2);
  a.next.next = new Node(3);
  a.next.next.next = new Node(4);

console.log(reverseLinkedList(a));

module.exports = { Node: Node, reverseLinkedList: reverseLinkedList };
