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
  //base cases: if either is null, return nodes from alternate list
  if (!l1) return l2;
  if (!l2) return l1;
  
  //recursive case: reassign l1.next to be a zipped list that starts at l2
  l1.next = zip(l2, l1.next);
  return l1;
}

module.exports = {Node: Node, zip: zip};
