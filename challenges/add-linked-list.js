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
  let split1 = (l1.toString().split(''))
  let split2 = (l2.toString().split(''))
  let result = [];
  let length = split1.length > split2.length ? split1.length : split2.length;
  let carry;
  console.log(split1, split2)
  for (let i = length - 1; i >= 0; i--) {
    result.push(Number(split1[i]) + Number(split2[i]))
  }
  result.forEach((e, i) => {
    if (e === 10) {
      result[i] = 0;
      result[i + 1] += 1;
    }
  })
  const node = new Node(result[0]);
  let node2 = new Node(result[1]);
  node.next = node2;

  addNode = (val) => {
    let newNode = new Node(val);
    node2.next = newNode;
    node2 = newNode;
  }
  for (let i = 2; i < result.length; i++) {
    addNode(result[i])
  }
  return node;
}


module.exports = { Node: Node, addLinkedList: addLinkedList };
