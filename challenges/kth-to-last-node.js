/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
	//return undefined if k is invalid or head is not provided
	if (!head || k < 1) return undefined;
	
	//initialize variables for current node of linked list and all nodes of linked list
	let currentNode = head;
	let nodes = [];

	//iterate through linked list, adding each nodes to the nodes array
	while (currentNode !== null) {
		nodes.push(currentNode);

		//set current node to the next node in the linked list
		currentNode = currentNode.next;
	}

	//return kth item from the end of the linked list, or undefined if k is outside the boundaries of the list
	return k <= nodes.length ? nodes[nodes.length - k].value : undefined;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
