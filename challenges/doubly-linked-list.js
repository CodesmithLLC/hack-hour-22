/*
Create a doubly linked list with an add and remove method
 */

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

/*
Adds a node to the end of the list
 */
LinkedList.prototype.add = function(val) {
  let newNode = new Node(val);

  newNode.prev = this.tail;

  if (!this.head){
    this.head = newNode;
    this.tail = this.head;
    newNode.prev = this.tail;
  
  } else {
     this.tail.next = new Node(val);
     newNode.prev = this.tail;
     this.tail = this.tail.next

  }
  
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(valToDelete) {
  // catch case when user wants to remove the head node :o
  let helper = this.head;
  let prev_holder = helper;

  
  while(helper){
    console.log("~~~~~~~~~~~~", helper.val)
    if (helper.val === valToDelete){
      console.log("value to delete", helper.val, helper.prev)
      // case for valToDelete is at the head
      if (helper === this.head){
        helper.next.prev = null;
        this.head = helper.next
      }
      // case for valToDelete is at the tail
      else if (helper === this.tail){
        helper.next.prev = null;
        this.tail = current.prev;
      }
      
      else {
        helper.next.prev = helper.prev;
        helper.prev.next = helper.next;
      }
      
      return;
    }

    helper = helper.next;
   //  helper = helper.next;
  }
};
 let mr_snake = new LinkedList;
 mr_snake.add(1);
 mr_snake.add(2);
 mr_snake.add(3);
 mr_snake.add(4);
 mr_snake.remove(2);

//  console.log(mr_snake);


//  tree = LinkedList.add(2);


module.exports = LinkedList;
