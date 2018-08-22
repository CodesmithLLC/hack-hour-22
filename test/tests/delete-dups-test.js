const { deliver, describe, it } = new (require('./../util/report-card'));
const expect = require('expect.js');
let deleteDups;

try {
  deleteDups = require('../../challenges/delete-dups.js');
} catch (error) {
  console.log('delete-dups could not be tested');
}

function Node(val) {
  this.value = val;
  this.next = null;
}

function LinkedList() {
  this.head = null;
  this.tail = null;
}

LinkedList.prototype.add = function(value) {
  const node = new Node(value);
  if(this.head === null) {
    this.head = node;
    this.tail = node;
  }
  else {
    this.tail.next = node;
    this.tail = node;
  }
}

module.exports = deliver((report) => {
  describe('delete-dups test', function() {
    let list;
    before(function() {
      expect(typeof deleteDups).to.eql('function');
      list = new LinkedList();
    });

    it('should not return duplicates', function() {
      list.add(5);
      list.add(9);
      list.add(5);
      list.add(7);
      deleteDups(list.head);
      expect(list.head.next.value).to.eql(9);
      expect(list.head.next.next.value).to.eql(7);
    }, ['linked-lists', 'iteration']);

    it('should account for consecutive duplicates', function() {
      list.add(7);
      list.add(7);
      list.add(1);
      deleteDups(list.head);
      expect(list.head.value).to.eql(5);
      expect(list.head.next.next.value).to.eql(7);
      expect(list.head.next.next.next.value).to.eql(1);
    }, ['linked-lists', 'iteration']);

    after(() => report());
  })
});
