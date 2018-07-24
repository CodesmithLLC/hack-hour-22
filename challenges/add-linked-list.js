/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 7 -> 0 -> 8
 *
 * The 7 is the ones digit (2 + 5).
 * The 0 is the tens digit (1 + 9, carry the 1).
 * The 8 is the hundreds digit (1 carried over + 5 + 2).
 *
 */

function addLinkedList(l1, l2, l3) {
  l3 = new Node(l1.value+l2.value);
  let diff;
  if (l3.value > 9){
     diff = l3.value - 9;
    l3.value -= diff;
    }
  if (l1.next){
    if (diff) l1.next.value += diff;
    
    l3.next = addLinkedList(l1.next, l2.next, l3.next)
  }
  else if (diff){
    l3.next = new Node(diff);
    }
  return l3;
}
// const l1 = new Node(2);
// l1.next = new Node(1);
// l1.next.next = new Node(5);

// const l2 = new Node(5);
// l2.next = new Node(9);
// l2.next.next = new Node(2);
// console.log(l1);
// console.log('this is l2 ',l2);
// console.log(addLinkedList(l1, l2));
module.exports = {Node: Node, addLinkedList: addLinkedList};
