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
var counter = 0; // how many nodes have been made


function Node(val) {
  this.value = val;
  this.next = null;
//   LLHelper.tail = this.next; // should be done somewhere else?
    counter += 1;

}

function kthToLastNode(k, head) {
 
  const kth = counter - k + 1;
  console.log(kth)
  // find the length of the LL first
  let checkNode = head;
//   console.log(checkNode.next)
  let internalCtr = 0;
  while(checkNode.next) {
    
    
    	internalCtr += 1;
//     	console.log(checkNode.value) 
      if (kth === internalCtr) {
        return checkNode.value;
      }

  	  checkNode = checkNode.next;
  }
  
//   console.log(counter)
  
//   return this.value
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');
a.next = b;
b.next = c;
c.next = d;
d.next = e;
console.log(kthToLastNode(3,a));
// console.log(kthToLastNode(0,a));
// console.log(LLHelper.counter);
module.exports = {Node: Node, kthToLastNode: kthToLastNode};
