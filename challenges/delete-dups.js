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
 * sort it and compare current and next
 */

function deleteDups(head) {
  let obj = {};
  obj[head.value] = true;
  while (head.next) {
    if (obj[head.next]) {
      head.next = head.next.next || null;
    } else {
      obj[head.next] = true;
    }
    head.next = head.next.next;
  }
}

module.exports = deleteDups;
