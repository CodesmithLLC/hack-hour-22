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

function LinkedList(value) {
  this.value = value;
  this.next = null;
}

function test() {
  const a = new LinkedList(1);
  a.next = new LinkedList(2);
  a.next.next = new LinkedList(3);
  a.next.next.next = new LinkedList(3);
  return a;
}


function deleteDups(head) {
  let current = head;
  const seen = [];
  while (current) {
    seen.push(current.value);
    if (seen.includes(current.next.value)) {
      current.next = current.next.next;
    }
    current = current.next;
  }
  return head;
}

module.exports = { deleteDups, test, LinkedList };
