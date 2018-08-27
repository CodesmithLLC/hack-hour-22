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
  this.value = val;
  this.next = null;
}


var node1 = new Node('1');
var node2 = node1.next = new Node('2');
var node3 = node2.next = new Node('3');
var node4 = node3.next = new Node('3');
var node5 = node4.next = new Node('5');

function deleteDups(head) {
  if (!head) return {};
  let temp = head;
  while (temp.next) {
    if (temp.value === temp.next.value) {
      temp.next = temp.next.next;
    }
    else {
      temp = temp.next;
    }
  }
  return JSON.stringify(head);
}

console.log(deleteDups(node1));

module.exports = deleteDups;
