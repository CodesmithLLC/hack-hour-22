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
  if (l1 && l2) {
    let temp1 = l1;
    let temp2 = l2;
    while (temp1 && temp2) {
      const a = temp1.next;
      const b = temp2.next;
      if (!b) {
        temp2.next = a;
        temp1.next = temp2;
        break;
      } if (!a) {
        temp1.next = temp2;
        break;
      }
      temp1.next = temp2;
      temp1 = a;
      temp2 = b;
    }
  }
  return l1 || l2;
}

module.exports = { Node, zip };
