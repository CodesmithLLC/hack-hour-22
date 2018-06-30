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
 // make a new head pointer to an empty linked linst 
 // check the first value of both linked lists 
 // whichever node from L1/L2 is smaller, append it to the new list and move the pointer ot the next node
 // reach the end of the list

  // create a new linked list pointer 
  let l3 = new Node(null, null);
  let previous = l3;

  //while both linked lists aren't empty
  while (l1 !== null && l2 !== null) {
    if (l1.value <= l2.value) {
      previous.next = l1;
      l1 = l1.next;
    } else {
      previous.next = l2;
      l2 = l2.next;
    }
    previous = previous.next;
  }
  // once we reach end of a linked list, append the other list because it's sorted
  if (l1 === null) { previous.next = l2; }
  if (l2 === null) { previous.next = l1 }

  return l3.next;
};

module.exports = {Node: Node, zip: zip};
