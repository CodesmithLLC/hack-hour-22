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

    // traverse over linkedlist
    let pointer = head;
    let store = {};
    let previous;
    while (pointer){
    //   console.log(pointer.value, " = value || previous =", previous);

      if (!store[pointer.value]) {
        // store value in an object
        store[pointer.value] = 'I exist';
      }
      else {
        // if the item is in the storage obj, delete it
        // console.log('yo, this is a duplicate')
        previous.next = pointer.next;
      }
      previous = pointer;
      pointer = pointer.next;


    }
    // console.log(store);
    // console.log("HEAD", head);
    return head;
}

function Node(val) {
    this.value = val;
    this.next = null;
}



 let linkedList =  new Node(1);
 linkedList.next =  new Node(1);
 linkedList.next.next =  new Node(3);
 linkedList.next.next.next =  new Node(4);
//  console.log(deleteDups(linkedList))

//  console.log(linkedList);
module.exports = deleteDups;
