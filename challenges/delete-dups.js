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
  if (!head) return null;
  
  const resultHead = {value: head.value, next: null};
  let curr = head.next;
  let resultCurr = resultHead;
  
  const uniqueVals = new Set(head.value);
  
  while (curr) {
    if (!uniqueVals.has(curr.value)) {
      uniqueVals.add(curr.value);
      
      resultCurr.next = {value: curr.value, next: null};
      resultCurr = resultCurr.next;
    }
    
    curr = curr.next;
  }
  
  return resultHead;
}

module.exports = deleteDups;
