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
    let currentHead = head;
    let oldHead = head.next;
    currentHead.next = null;
    while (oldHead) {
        current = oldHead;
        oldHead = oldHead.next;
        current.next = currentHead;
        currentHead = current;
    }
    return currentHead;
}

module.exports = { Node: Node, reverseLinkedList: reverseLinkedList };

// Tests
// a = new Node(1);
// b = new Node(2);
// c = new Node(3);
// a.next = b; 
// b.next = c;
// console.log(a = reverseLinkedList(a));
