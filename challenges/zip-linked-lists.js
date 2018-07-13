/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be  the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(link1, link2) {
  if (!link1) return link2;
  if (!link2) return link1;
  let head = link1;
  let temp = link1;

  //now that the head of link1 has been preserved, we can re-assign it to the next property.
  link1 = link1.next;

  while (link1 && link2) {

    temp.next = link2;
    link2 = link2.next;
    temp = temp.next;
    temp.next = link1;
    link1 = link1.next;
    // temp = temp.next;
  }

  return head;
};


// Recursive approach
function zip(l1, l2) {
  // Base case: if either node is null, return remaining nodes from other list
  if (!l1) return l2;
  if (!l2) return l1;

  // Recursive case: reassign l1's next to be a zipped list that starts at l2
  l1.next = zip(l2, l1.next);
  return l1;
}


module.exports = { Node: Node, zip: zip };
