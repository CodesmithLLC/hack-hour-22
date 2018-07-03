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
  // while (l1 !== null && l2 !== null) {
  //   if (l1.value <= l2.value) {
  //     previous.next = l1;
  //     l1 = l1.next;
  //   } else {
  //     previous.next = l2;
  //     l2 = l2.next;
  //   }
  //   previous = previous.next;
  // }
  // // once we reach end of a linked list, append the other list because it's sorted
  // if (l1 === null) { previous.next = l2; }
  // if (l2 === null) { previous.next = l1 }

  // return l3.next;
  if (!l1) return l2;
  if (!l2) return l1;

  l1.next = zip(l2, l1.next);
  return l1;

};

module.exports = {Node: Node, zip: zip};
