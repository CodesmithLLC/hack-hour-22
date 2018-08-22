// Nested loops
function deleteDups(head) {
  var inner;
  for (var outer = head; outer.next; outer = outer.next) {
    inner = outer;
    while (inner.next) {
      if (outer.value === inner.next.value) {
        inner.next = inner.next.next;
      } else {
        inner = inner.next;
      }
    }
  }
}


// Hashing/Object
function deleteDups(head) {
  var data = {};
  var prev;
  for (var curr = head; curr; curr = curr.next) {
    if (curr.value in data) {
      prev.next = curr.next;
    } else {
      data[curr.value] = true;
      prev = curr;
    }
  }
}
