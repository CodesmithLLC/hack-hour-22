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

function reverseLinkedList(node, lastNode = null) {
  if (!(node instanceof Node)) return null;
  const temp = node.next;
  node.next = lastNode;
  if (temp === null) return node;
  return reverseLinkedList(temp, node);
}

module.exports = { Node, reverseLinkedList };
