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
  let tailNode = head, numNodes = 1, kthNode = head;

  while (tailNode.next){
    tailNode = tailNode.next;
    numNodes +=1;
  }

  if (numNodes - k < 0){
    return undefined;
  }else{
    for (let i = 1; i <= numNodes-k; i++){
      kthNode = kthNode.next;
    }
  }

  return kthNode.value;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};


// const a = new Node('A');
// const b = new Node('B');
// const c = new Node('C');
// const d = new Node('D');
// const e = new Node('E');
 
// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
 
// console.log(kthToLastNode(6, a)); //-> returns 'D' (the value on the second to last node)


// function kthToLastNode(k, head) {
//   var lead = head;
//   var follow = head;
//   for (var i = 0; i < k && lead; i++) {
//     lead = lead.next;
//   }
//   while (lead && follow) {
//     lead = lead.next;
//     follow = follow.next;
//   }
//   return follow.value;
// }