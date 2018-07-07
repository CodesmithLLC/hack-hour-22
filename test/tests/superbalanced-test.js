const { deliver, describe, it } = new (require('./../util/report-card'));
const expect = require('expect.js');
let BinaryTree, superbalanced;
try {
  BinaryTree = require('../../challenges/superbalanced.js').BinaryTree;
  superbalanced = require('../../challenges/superbalanced.js').superbalanced;
} catch (e) {
  console.log('superbalanced could not be tested');
}

module.exports = deliver((report) => {
  if (typeof BinaryTree === 'function' && typeof superbalanced === 'function') {
    describe('Superbalanced Test', function() {
      let tree;
      beforeEach(function() {
        tree = new BinaryTree(10);
        tree.left = new BinaryTree(5);
        tree.left.left = new BinaryTree(3);
        tree.left.right = new BinaryTree(6);
        tree.right = new BinaryTree(14);
      });

      it('should detect superbalanced trees', function() {
        expect(superbalanced(tree)).to.eql(true);
      }, ['binary search trees', 'recursion']);

      it('should return false for not superbalanced trees', function() {
        tree.left.left.left = new BinaryTree(1);
        expect(superbalanced(tree)).to.eql(false);
      }, ['binary search trees', 'recursion']);

      after(() => {
        report();
      });
    });
  } else {
    console.log('BinaryTree and/or superbalanced were not exported properly');
  }
});
