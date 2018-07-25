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

// function to get the height of a node
function bstHeight(node) {
  if(!node) return 0;
  return 1 + Math.max(bstHeight(node.left), bstHeight(node.right))
}

function superbalanced(tree) {
  // base condition
  if (tree === null) return true;
  // get height of left and right
  lh = bstHeight(tree.left)
  rh = bstHeight(tree.right)
  // return true if values for rh - lh are 1, 0, or -1
  return (Math.abs(lh - rh) <= 1 && superbalanced(tree.left) && superbalanced(tree.right));
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
