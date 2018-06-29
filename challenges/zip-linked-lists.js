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
  let obj1 = l1.next;
  let obj2 = l2.next;
  l1.next = l2;
  l2.next = obj1;
  while(obj2.next!==null){
    obj2.next = obj1.next;
    obj2 = obj1.next;
    obj1 = obj2.next;
    obj2.next = obj1;
    obj1.next = obj2.next;
    obj2 = obj1.next;
  }
};

module.exports = { Node: Node, zip: zip };