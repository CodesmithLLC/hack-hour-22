var expect = require('expect.js');
var Node, deleteNode;
try {
  Node =  require('../../challenges/delete-node.js').Node;
  deleteNode = require('../../challenges/delete-node.js').deleteNode;
} catch (e) {
  console.log('delete-node could not be tested');
}

if (typeof Node === 'function' && typeof deleteNode === 'function') {
  describe('Delete Node', function() {
    var a, b, c;
    before(function () {
      a = new Node('A');
      b = new Node('B');
      c = new Node('C');

      a.next = b;
      b.next = c;
    });

    it('should be able to delete ay node', function() {
      deleteNode(b);
      expect(a.value).to.eql('A');
      expect(a.next.value).to.eql('C');
      expect(b).to.eql(null);
      deleteNode(c);
      expect(a.value).to.eql('A');
      expect(a.next.value).to.eql(null);
      expect(c).to.eql(null);

    });

  });
} else {
  console.log('Node and/or deleteNode were not exported properly');
}



