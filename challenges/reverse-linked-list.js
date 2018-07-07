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
    let result = null;
    const stack = [];
    let current = head;

    while (current) {
        stack.push(current);
        current = current.next;
    }
    //set head to end of list 
    result = stack.pop || [];
    current = result;

    while (current) {
        current.next = stack.pop();
        current = current.next;
    }
    return result;
}


//complexity: running time: O(n) 
//space: o(1)

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
