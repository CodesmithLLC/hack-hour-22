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

function Node(val) {
  this.val = val;
  this.next = null;
}

function deleteDups(head) {
  let newHead;
  let newTail;
  let curr = head;
  const arr = [];

  while (curr) {
    // place unique values into arr
    if (arr.indexOf(curr.val) === -1) arr.push(curr.val);
    curr = curr.next;
  }
  newHead = new Node(arr.shift());
  newTail = newHead;

  while (arr.length) {
    const newCurr = arr.shift();
    newTail.next = new Node(newCurr);
    newTail = newTail.next;
  }
  return newHead;
}

module.exports = deleteDups;
