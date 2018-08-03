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
  let outer = head;
  let inner;

  while (outer && outer.next) {
    inner = outer.next;
    const { value } = outer;
    while (inner && inner.next) {
      if (value === inner.next.value) {
        if (inner.next.next) {
          inner.next = inner.next.next;
        } else {
          inner.next = null;
        }
      }
      inner = inner.next;
    }
    outer = outer.next;
  }
  return new Set(head);
}

module.exports = deleteDups;
