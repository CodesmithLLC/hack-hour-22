const { deliver, describe, it } = new (require('./../util/report-card'));
const expect = require('expect.js');
let Node, kthToLastNode;
try {
  Node = require('../../challenges/kth-to-last-node.js').Node;
  kthToLastNode = require('../../challenges/kth-to-last-node.js').kthToLastNode;
} catch (e) {
  console.log('kth-to-last-node could not be tested');
}

module.exports = deliver((report) => {
  if (typeof Node === 'function' && typeof kthToLastNode === 'function') {
    describe('Kth to Last Value', function() {
      let a
      before( function(done) {
        a = new Node('A');
        const b = new Node('B');
        const c = new Node('C');
        const d = new Node('D');
        const e = new Node('E');

        a.next = b;
        b.next = c;
        c.next = d;
        d.next = e;
        done();

      });
      it("should return undefined if it doesn't exist", function() {
        expect(kthToLastNode(5, null)).to.eql(undefined);
        expect(kthToLastNode(10, a)).to.eql(undefined);
      }, ['edge cases', 'linked-lists', 'iteration', 'recursion']);

      it('should return value of kth to last node', function() {
        expect(kthToLastNode(2,a)).to.eql('D');
        expect(kthToLastNode(1, a)).to.eql('E');
        expect(kthToLastNode(5, a)).to.eql('A');
      }, ['edge cases', 'linked-lists', 'iteration', 'recursion']);

      after(() => {
        report();
      });
    });
  } else {
    console.log('Node and/or kthToLastNode were not exported properly');
  }
});
