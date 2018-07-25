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

function depth(tree) {
	if (!tree) return 0;
	return Math.max((depth(tree.left) + 1), (depth(tree.right) + 1))
}

function superbalanced(tree) {
	if (Math.abs(depth(tree.left) - depth(tree.right)) > 1) return false;
	if (!tree) return true;
	if (tree.left === null && tree.right === null) return true;
  if (tree.left !== null && tree.right !== null){
  	if (tree.value > tree.left.value && tree.value < tree.right.value) return (superbalanced(tree.left) && superbalanced(tree.right));
  	else return false;
  }
  if (tree.left && tree.left.value < tree.value) return superbalanced(tree.left);
  if (tree.right && tree.right.value > tree.value) return superbalanced(tree.right);
  return false
}

module.exports = { BinaryTree: BinaryTree, superbalanced: superbalanced };

