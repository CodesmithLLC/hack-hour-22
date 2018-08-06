/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 */

function deleteDups(head) {
  const values = []; 
  let prevNode;
  let currNode = head;
  while (currNode) {
    if (values.includes(currNode.value)) {
      // drop current node from the list
      prevNode.next = currNode.next;
      // otherwise, add to cache
    } else values.push(currNode.value);
    // advance both trackers
    prevNode = currNode; 
    currNode = currNode.next;
  }
}

module.exports = deleteDups;
