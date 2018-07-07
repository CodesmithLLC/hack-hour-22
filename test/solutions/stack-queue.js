function Stack() {
  this.items = [];
}

Stack.prototype.push = function(item) {
  this.items.push(item);
};

Stack.prototype.pop = function() {
  return this.items.pop();
};

Stack.prototype.isEmpty = function() {
  return this.items.length;
};

function Queue() {
  this.in = new Stack();
  this.out = new Stack();
}

Queue.prototype.enqueue = function(item) {
  this.in.push(item);
};

Queue.prototype.dequeue = function() {
  if (this.out.isEmpty()) {
    while (!this.in.isEmpty()) {
      this.out.push(this.in.pop());
    }
  }
  return this.out.pop();
};
