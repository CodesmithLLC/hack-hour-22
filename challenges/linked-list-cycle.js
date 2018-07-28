/* eslint no-multi-assign: 0 */
/**
 * We are familar with linked lists being linear and terminating:
 *
 * A->B->C->D
 *
 * However, linked lists can also have cyclical references:
 *
 * A->B->C->D
 *    ^     |
 *    |     V
 *    G<-F<-E
 *
 * Create a function that accepts a linked list and returns true if the linked list has a cyclical reference
 *
 * var node1 = new Node('1');
 * var node2 = node1.next = new Node('2');
 * var node3 = node2.next = new Node('3');
 * var node4 = node3.next = new Node('4');
 * var node5 = node4.next = new Node('5');
 * hasCycle(node1); // => false
 * node5.next = node2;
 * hasCycle(node1); // => true
 *
 * Challenge 1: Do this in linear time
 * Challenge 2: Do this in constant space
 * Challenge 3: Do not mutate the original nodes in any way
 *
 */

const Node = function Node(value) {
  this.value = value;
  this.next = null;
};

// function generate(cyclic) {
//   const node1 = new Node('1');
//   const node2 = node1.next = new Node('2');
//   const node3 = node2.next = new Node('3');
//   const node4 = node3.next = new Node('4');
//   const node5 = node4.next = new Node('5');
//   if (cyclic) node5.next = node2;
//   return node1;
// }

function hasCycle(head) {
  let fast = head;
  let slow = head;
  while (fast) {
    for (let i = 0; i < 2; i += 1) {
      fast = fast.next;
      if (fast === null) return false;
      if (fast === slow) return true;
    }
    slow = slow.next;
  }
  return false;
}

module.exports = { Node, hasCycle };
