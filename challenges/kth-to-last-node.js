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
  

  // let lead = head;
  // let follow = head;

  // for (let i = 0; i < k && lead; i++) {
  //   lead = lead.next;
  // }
  // while (lead && follow) {
  //   lead = lead.next;
  //   follow = follow.next;
  // }
  // return follow.value;


  let p1 = head; 
  let p2 = head;
  for (let i = 0; i < k; i++) {
    if (p1 == null) return null;
    p1 = p1.next;
  }

  while (p1 !== null) {
    p1 = p1.next;
    p2 = p2.next;
  }
  return p2.value;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
