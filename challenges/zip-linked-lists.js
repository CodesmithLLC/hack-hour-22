/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
	if (!l1) return l2;
	if (!l2) return l1;
	if ((l1.next === null && l2.next === null) || l1.next === null) {
		l1.next === l2;
		return;
	} else if (l2.next === null) {
		let temp = l1.next;
		l1.next = l2;
		l2.next = temp;
		return;
	} else {
		let temp1 = l1.next;
		let temp2 = l2.next;
		l1.next = l2;
		l2.next = temp1;
		zip(temp1, temp2);
	}
	return l1;
};


module.exports = {Node: Node, zip: zip};
