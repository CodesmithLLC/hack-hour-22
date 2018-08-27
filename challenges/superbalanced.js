/**
 * Write a function to see if a binary tree "superbalanced".
 * An empty tree is balanced. A non-empty binary tree T is balanced if:
1) Left subtree of T is balanced
2) Right subtree of T is balanced
3) The difference between heights of left subtree and right subtree is not more than 1.
example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF
 */

function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function superbalanced(tree) {
  function height(node) {
    if (node === null) return 0;
    else {
      return 1 + Math.max(height(node.left), height(node.right));
    }
  }
  return Math.abs(height(tree.left) - height(tree.right)) <= 1;
}


var myBST = new BinarySearchTree(8);
var n1 = new BinarySearchTree(3);
var n2 = new BinarySearchTree(10);
var n3 = new BinarySearchTree(1);
var n4 = new BinarySearchTree(6);
var n5 = new BinarySearchTree(4);
var n6 = new BinarySearchTree(7);
var n7 = new BinarySearchTree(14);

myBST.left = n1;
myBST.right = n2;
n2.right = n6;
n2.left = n4;

superbalanced(myBST);

module.exports = { BinaryTree: BinaryTree, superbalanced: superbalanced };
