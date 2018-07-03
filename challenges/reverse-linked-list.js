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

a = new Node(1)
b = new Node(2)
c = new Node(3)
d = new Node(4)

function reverseLinkedList(head) {
  let curr = head;
  let prev = null;
  let nextNode = null;

  while(curr) {
    nextNode = curr.next
    curr.nexxt = prev;

    prev = curr;
    curr = nextNode;
  }
  return prev;
}

let newHead = reverseLinkedList(a);
console.log("The new head is:", newHead);

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
