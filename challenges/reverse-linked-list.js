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
	let current = head;
	let previous = null;
	let nextNode = null;

	//until we reach the end of the list
	while (current) {
		// make a pointer copy of next element before we overwrite current.next
		nextNode = current.next;

		//reverse the 'next' pointer
		current.next = previous;

		//go forward on the list
		previous = current;
		current = nextNode;
	}
	return previous;
}

module.exports = { Node, reverseLinkedList };
