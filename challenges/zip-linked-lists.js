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
  let currL1 = l1;
  let tempL1;

  let currL2 = l2;
  let tempL2;

  let testNode = currL1;

  let zippingList = "l1";

  while (testNode.next) {
    if (zippingList === "l1") {
      tempL1 = currL1.next;
      currL1.next = currL2;
      currL1 = tempL1;
      zippingList = "l2";
      testNode = currL2;
    } else {
      tempL2 = currL2.next;
      currL2.next = currL1;
      currL2 = tempL2;
      zippingList = "l1";
      testNode = currL1;
    }
  }
}

let a = new Node(1);
a.next = new Node(2);
a.next.next = new Node(3);

let b = new Node(4);
b.next = new Node(5);
b.next.next = new Node(6);

zip(a, b);

module.exports = { Node: Node, zip: zip };
