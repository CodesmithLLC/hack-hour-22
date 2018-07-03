/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
  this.value = value;
  this.next = null;
}

// nonrecursive version

// function reverseLinkedList(head_) {
//   let curr = head_, head, result = null;
//   while (curr) {
//     head = curr.next;
//     curr.next = result;
//     result = curr;
//     curr = head;
//   }
// 
//   return result;
// }

// recursive version

function reverseLinkedList(head) {
  if (!(head && head.next)) return head;
  
  const newTail = head.next;
  head.next = null;
  
  const newHead = reverseLinkedList(newTail);
  newTail.next = head;
  return newHead;
}

/*
// log the contents of a list
function logger(list) {
  console.log('begin log');
  
  let node = list;
  while (node) {
    console.log(node.value);
    node = node.next;
  }
}

// test 1
(() => {
  const l = new Node(2);
  l.next = new Node(3);
  l.next.next = new Node(4);
  l.next.next.next = new Node(9);
  
  logger(reverseLinkedList(l));
})();

// test 2
(() => {
  const l = new Node(0);
  l.next = new Node(3);
  l.next.next = new Node(4);
  l.next.next.next = new Node(7);
  l.next.next.next.next = new Node(12);
  
  logger(reverseLinkedList(l));
})();

// test 3
(() => {
  const l = new Node(2);
  
  logger(reverseLinkedList(l));
})();
*/

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
