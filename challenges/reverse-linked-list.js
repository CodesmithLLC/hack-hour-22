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
}

function reverseLinkedList(head, original = null) {
	if (head === null) return;
  if (original === null) original = head;
  let current = head;
  while (current !== original) {
    current = current.next;
  }
  if (current.next === null) {
    return head;
  }
  let temp = current.next.next;
  let newH = current.next;
  newH.next = head;
  current.next = temp
  return reverseLinkedList(newH, original);
}

module.exports = { Node: Node, reverseLinkedList: reverseLinkedList };