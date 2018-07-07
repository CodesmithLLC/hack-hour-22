var expect = require('expect.js');
var BinaryTree, validBST;
try {
  BinaryTree = require('../../challenges/valid-bst.js').BinaryTree;
  validBST = require('../../challenges/valid-bst.js').validBST;
} catch (e) {
  console.log('valid-bst could not be tested');
}

if (typeof BinaryTree === 'function' && typeof validBST === 'function') {
  describe('Valid BST Test', function() {
    var tree;
    beforeEach(function() {
      tree = new BinaryTree(10);
      tree.left = new BinaryTree(5);
      tree.left.left = new BinaryTree(3);
      tree.left.right = new BinaryTree(6);
      tree.right = new BinaryTree(14);
    });

    it('returns true for tree with single node', function() {
      tree.left = null;
      tree.right = null;
      expect(validBST(tree)).to.eql(true);
    });

    it('returns true for valid tree with height of 1', function() {
      tree.left = new BinaryTree(5);
      tree.right = new BinaryTree(15);
      expect(validBST(tree)).to.eql(true);
    });

    it('returns false for invalid left tree with height of 1', function() {
      tree.left = new BinaryTree(11);
      tree.right = new BinaryTree(15);
      expect(validBST(tree)).to.eql(false);
    });

    it('returns false for invalid right tree with height of 1', function() {
      tree.left = new BinaryTree(8);
      tree.right = new BinaryTree(9);
      expect(validBST(tree)).to.eql(false);
    });

    it('returns true for deeper valid BST', function() {
      expect(validBST(tree)).to.eql(true);
    });

    it('returns false for deeper left leaning invalid BST', function() {
      tree.left.left.left = new BinaryTree(4);
      expect(validBST(tree)).to.eql(false);
    });

    it('returns false for deeper right leaning invalid BST', function() {
      tree.right.right = new BinaryTree(13);
      expect(validBST(tree)).to.eql(false);
    });

    it('returns false when left right child < left child', function() {
      tree.left.right = new BinaryTree(4);
      expect(validBST(tree)).to.eql(false);
    });

    it('returns false when right left child > right child', function() {
      tree.right.left = new BinaryTree(15);
      expect(validBST(tree)).to.eql(false);
    });

    it('returns false when leaf is valid to its parent but not to grandparent (left-right case)', function() {
      tree.left.right.right = new BinaryTree(11);
      expect(validBST(tree)).to.eql(false);
    });

    it('returns false when leaf is valid to its parent but not to grandparent (right-left case)', function() {
      tree.right.left = new BinaryTree(9);
      expect(validBST(tree)).to.eql(false);
    });
  });
} else {
  console.log('BinaryTree and/or validBST were not exported properly');
}
