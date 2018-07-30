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

function superbalanced(tree) {
  return treeCode(tree) !== -1;
}

// return -1 for unbalanced, tree height for balanced
function treeCode(tree) {
  const leftVal = this.left ? treeCode(leftVal) : 0;
  const rightVal = this.right ? treeCode(rightVal) : 0;
  
  if (leftVal >= 0 && rightVal >= 0 && Math.abs(leftVal - rightVal) <= 1)
    return Math.max(leftVal, rightVal) + 1;
  else
    return -1;
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
