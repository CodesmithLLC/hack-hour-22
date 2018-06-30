/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.head = null;
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  const mergedList = new Node();
  let current = l1.head, count=1;
  while (l1.next && l2.next){
    
    mergedList.push(current.value);
    if (count === 1){
      count = 2;
      current = l2.next;
    }else{
      count = 1;
      current = l1.next;
    }
    
  }
  return mergedList;
};

Node.prototype.push = function(value) {
  const newNode = new Node(value);
  let current;
  if (this.head === null){
    this.head = newNode;
  }else{
    current = this.head;
    while (current.next){
      current = current.next;
    }

    current.next = newNode;
  }
  
};

module.exports = {Node: Node, zip: zip};

let l1, l2;
l1 = new Node();
l2 = new Node();

l1.push(1);
l1.push(3);
l1.push(5);

l2.push(2);
l2.push(4);
l2.push(6);

console.log(l1.head.value);
console.log(zip(l1, l2));

