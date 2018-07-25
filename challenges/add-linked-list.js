/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 7 -> 0 -> 8
 *
 * The 7 is the ones digit (2 + 5).
 * The 0 is the tens digit (1 + 9, carry the 1).
 * The 8 is the hundreds digit (1 carried over + 5 + 2).
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
  const l1Values = [];
  const l2Values = [];
  let currL1 = l1;
  let currL2 = l2;

  while (currL1) {
    l1Values.push(currL1.value);
    currL1 = currL1.next;
  }

  while (currL2) {
    l2Values.push(currL2.value);
    currL2 = currL2.next;
  }

  const max = l1Values.length > l2Values.length ? l1Values.length : l2Values.length;

  let remainder;
  const newNumber = [];

  for (let i = 0; i < max; i++) {
    if (!l1Values[i]) newNumber.push(l2Values[i]);
    else if (!l2Values[i]) newNumber.push(l1Values[i]);
    else {
      if (remainder) {
        let num = l1Values[i] + l2Values[i] + remainder;
        if (num >= 10) {
          console.log(num);
          remainder = 10 - num;
          newNumber.push(remainder - num);
        } else {
          newNumber.push(num);
        }
      } else {
        let num = l1Values[i] + l2Values[i];
        if (num >= 10) {
          remainder = 11 - num;
          newNumber.push(num - remainder);
        } else {
          newNumber.push(num);
        }
      }
    }
  }
  return newNumber;
}

module.exports = { Node: Node, addLinkedList: addLinkedList };
