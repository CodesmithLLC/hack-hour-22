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
  let output = Node((l1.value + l2.value) % 10);
  let sum = 0;
  let ten = 10;
  while (l1.next) {
    l1.value = l1.next;
    l2.value = l2.next;
    sum = l1.value + l2.value;
    if (sum > 9) {
      sum = sum % 10;
    }
    output.next = sum;
  }
  return output;
}

module.exports = { Node: Node, addLinkedList: addLinkedList };
