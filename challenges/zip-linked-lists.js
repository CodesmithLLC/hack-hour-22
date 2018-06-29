/*
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
  if (!l1) return l2;
  
  let node1 = l1, node2 = l2;
  while (node1.next && node2) {
    const next1 = node1.next, next2 = node2.next;
    
    node1.next = node2;
    node2.next = next1;
    
    node1 = next1;
    node2 = next2;
  }
  
  if (!node1.next) node1.next = node2;
  return l1;
};

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
  const l1 = new Node(2);
  l1.next = new Node(3);
  l1.next.next = new Node(4);

  const l2 = new Node(7);
  l2.next = new Node(8);
  l2.next.next = new Node(9);

  logger(zip(l1, l2));
})();

// test 2
(() => {
  const l1 = new Node(2);
  l1.next = new Node(3);
  l1.next.next = new Node(4);
  l1.next.next.next = new Node(5);

  const l2 = new Node(7);
  l2.next = new Node(8);

  logger(zip(l1, l2));
})();

// test 3
(() => {
  const l1 = new Node(2);
  l1.next = new Node(3);

  const l2 = new Node(7);
  l2.next = new Node(8);
  l2.next.next = new Node(9);
  l2.next.next.next = new Node(10);

  logger(zip(l1, l2));
})();

*/

module.exports = {Node: Node, zip: zip};
