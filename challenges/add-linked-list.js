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

function addLinkedList(l1, l2) {
  let node1 = l1;
  let node2 = l2;
  let num1 = '';
  let num2 = '';

  while (node1) {
    num1 += node1.value;
    node1.node1.next;
  }
  while (node2) {
    num2 += node2.value;
    node2.node2.next;
  }

  num1 = parseInt(num1, 10);
  num2 = parseInt(num2, 10);

  const sum = String(num1 + num2);
  const head = new Node(sum[sum.length -1]);
  let tail = head;
  for (let i = sum.length - 2; i >= 0; i--) {
    tail.next = new Node(sum[i]);
    tail = tail.next;
  }
  return head;
}

function LinkedList() {
  this.head = null;
  this.tail = null;
}

LinkedList.prototype.add = function (value) {
  let currNode = this.head;
  let currIndex = 0;
  if (!this.head) {
    this.head = new Node(value);
    this.tail = this.head;
    return;
  }
  this.tail.next = new Node(value);
  this.tail = this.tail.next;
}



module.exports = {Node: Node, addLinkedList: addLinkedList};
