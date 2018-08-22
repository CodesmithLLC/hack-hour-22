// iterative
function reverseLinkedList(head) {
  var prev = null;
  var curr = head;
  var next;
  
  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  
  head = prev;
  return head;
}

// recursive
function reverseLinkedList(head) {
  if (!head || !head.next) return head;
  
  var h = head;
  var t = h.next;
  var end = reverseLinkedList(t);
  
  h.next.next = h;
  h.next = null;
  
  return end;
}
