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

function linkedListToInt(l1, l2, base = 1) {
	if (!l1 && !l2) return 0;
	if (!l1) return (l2.value * base) + linkedListToInt(l1, l2.next, base * 10);
	if (!l2) return (l1.value * base) + linkedListToInt(l1.next, l2, base * 10);
	return ((l1.value + l2.value) * base) + linkedListToInt(l1.next, l2.next, base * 10);
}

function addLinkedList(l1, l2) {
	let num = linkedListToInt(l1, l2);
	let digits = num.toString().split('');
	let newLL = new Node(digits.pop());
	let currentNode = newLL;
	while (digits.length !== 0) {
		currentNode.next = new Node(digits.pop());
		currentNode = currentNode.next;
	}
	return newLL;
}

module.exports = {Node: Node, addLinkedList: addLinkedList, linkedListToInt:linkedListToInt };

