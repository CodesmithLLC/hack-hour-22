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

 if (k < 0) return undefined;
 if (k === 0) return head.value;


 let currentNodeIndex = 0;
 let linkedLength = 0;
 let currentNode = head;
 while (currentNode.next !== null) {
   currentNodeIndex += 1;
   currentNode = currentNode.next;
 }
 // store list length
 linkedLength = currentNodeIndex;
 if (k > linkedLength) return undefined;

 // reset for a second traversal
 currentNodeIndex = 0;
 currentNode = head;

 for (let currentNodeIndex = 0; currentNodeIndex < linkedLength - k + 1; currentNodeIndex++) {
   currentNode = currentNode.next;
 }

 return currentNode.value;

}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
