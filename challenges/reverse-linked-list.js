/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {
    let last, next;
    let curr = head;

    while (curr) {
        next = curr.next;
        curr.next = last;
        last = curr;
        curr = next;
    }

    head = last;
    return head;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
