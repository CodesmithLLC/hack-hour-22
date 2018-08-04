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
  let a = head;
  while (a) {
    let b = a.next;
    let prevNode = a;
    while (b) {
      if (a.value === b.value) {
        prevNode.next = b.next;
        // while (prevNode.next.value === b.next.value) {
        //   b = b.next;
        //   prevNode.next = b.next;
        // }
      }
      prevNode = b;
      b = b.next;
    }
    a = a.next;
  }
  return head;
}

module.exports = deleteDups;
