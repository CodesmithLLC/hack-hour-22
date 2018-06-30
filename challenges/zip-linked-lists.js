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

  while(link1 && link2) {

    temp.next = link2;
    link2 = link2.next;
    temp = temp.next;
    temp.next = link1;
    link1 = link1.next;
    // temp = temp.next;
  }

  return head;
};


module.exports = {Node: Node, zip: zip};
