
function kthToLastNode(k, head) {
  var length = 0;
  var curr = head;
  while (curr) {
    length += 1;
    curr = curr.next;
  }
  var i = length - k;
  curr = head;
  if (i < 0) {
    return undefined;
  }
  while (i--) {
    curr = curr.next;
  }
  return curr.value;
}


function kthToLastNode(k, head) {
  var lead = head;
  var follow = head;
  for (var i = 0; i < k && lead; i++) {
    lead = lead.next;
  }
  while (lead && follow) {
    lead = lead.next;
    follow = follow.next;
  }
  return follow.value;
}
