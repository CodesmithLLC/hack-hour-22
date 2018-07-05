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
    
    if (!head || head.next) return head;
    let temp = head.next;
    head = head.next.next;
    head.next = undefined;
    return temp;
}

let linkedList = new Node(8);
linkedList.next = new Node(7);
linkedList.next = new Node(6);
console.log(reverseLinkedList(linkedList));

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
