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

function reverseLinkedList(head) {
  if ((!head || !head.next)) return head;
  let temp = head;
  while (temp.next) {
    let temp2 = head.next;
    head = head.next;
    temp.next = temp2.next;
    head.next = temp;
  }
  return head;
}

module.exports = { Node, reverseLinkedList };
