/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 7 -> 0 -> 8
 *
 * The 7 is the ones digit (2 + 5).
 * The 0 is the tens digit (1 + 9, carry the 1).
 * The 8 is the hundreds digit (1 carried over + 5 + 2).
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function generateNode() {
  return new Node(Math.floor(Math.random() * 10));
}

function generate() {
  const a = generateNode();
  a.next = generateNode();
  a.next.next = generateNode();
  const b = generateNode();
  b.next = generateNode();
  b.next.next = generateNode();
  b.next.next.next = generateNode();
  return [a, b];
}

function addLinkedList(l1, l2) {
  const newHead = new Node(0);
  let currentNode = newHead;
  let left = l1;
  let right = l2;

  while (left || right) {
    currentNode.value += left ? left.value : 0;
    currentNode.value += right ? right.value : 0;

    if (currentNode.value >= 10) {
      currentNode.value -= 10;
      currentNode.next = new Node(1);
    } else if (!left && !right) {
      currentNode.next = null;
    }

    if (left) left = left.next;
    if (right) right = right.next;
    if ((left || right) && !currentNode.next) currentNode.next = new Node(0);
    currentNode = currentNode.next;
  }

  return newHead;
}

module.exports = { generate, Node, addLinkedList };
