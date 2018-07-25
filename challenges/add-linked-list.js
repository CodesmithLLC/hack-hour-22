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
function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
  let head1 = l1;
  let head2 = l2;
  // put everything in an array
  // then pop the element and insert into an array 
  const arr1 = [];
  const arr2 = [];
  while (head1){
    arr1.push(head1.value);
    head1 = head1.next;
  }


  while (head2){
    arr2.push(head2.value);
    head2 = head2.next;
  }
  // console.log(arr1, arr2)
  
  const sum = parseInt(arr1.reverse().join('')) + parseInt(arr2.reverse().join(''));
  // console.log(sum)

  // create the LL
  // make the sum an array
  const llContent = sum.toString().split('');
  

  const newTree = new Node(llContent.pop());
  // console.log(newTree);
  let head = newTree;
  // console.log(head);
  // console.log(llContent); 
  
  while (llContent[0]){
    // console.log(llContent);
    head.next = new Node(llContent.pop());
    head = newTree.next;
    // console.log(newTree);
  }
  
  return newTree;

}



let tree1 = new Node(2);
 tree1.next = new Node(1);
 tree1.next.next = new Node(5);
let tree2 = new Node(5);
 tree2.next = new Node(9);
 tree2.next.next = new Node(2);
 console.log(addLinkedList(tree1, tree2));

// console.log(tree1);
// console.log(tree2);
module.exports = {Node: Node, addLinkedList: addLinkedList};
