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
  if (!l1 || !l2) return l1 || l2;
  let carryOver = 0;
  let temp = l1;
  let temp2 = l2;
  while (temp && temp2) {
    temp.value = temp.value + temp2.value + carryOver;
    if (temp.value > 9) {
      carryOver = 1;
      temp.value -= 10;
    }
    temp.head = temp.head || temp.value;
    temp = temp.next;
    temp2 = temp2.next;
  }
  return temp.head;
}

module.exports = { Node, addLinkedList };

const node1 = new Node(5);
node1.next = new Node(3);
node1.next.next = new Node(4);
node1.next.next.next = new Node(5);
node1.next.next.next.next = new Node(6);

const node2 = new Node(3);
node2.next = new Node(4);
node2.next.next = new Node(5);
node2.next.next.next = new Node(6);
node2.next.next.next.next = new Node(6);

console.log(addLinkedList(node1, node2));