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
  let current = head;
  let previous = null;

  while (current) {
    let save = current.next;
    current.next = previous;
    previous = current;
    current = save;
  }
  return previous;
}

function reverseLinkedList(head) {

}

const list = new Node(1);
a.next = new Node(2);
a.next.next = new Node(3);
a.next.next.next = new Node(4);


module.exports = { Node: Node, reverseLinkedList: reverseLinkedList };
