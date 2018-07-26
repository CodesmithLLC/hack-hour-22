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
  console.log(tree)
  if (!tree) return true;
  if (!tree.right && (tree.left && (tree.left.left || tree.left.right))) return false;
  if (!tree.left && (tree.right && (tree.right.right || tree.right.left))) return false;
  return (superbalanced(tree.left) && superbalanced(tree.right));
}
module.exports = { BinaryTree, superbalanced };

const tree = new BinaryTree(10);
tree.left = new BinaryTree(5);
tree.left.left = new BinaryTree(3);
tree.left.right = new BinaryTree(6);
tree.right = new BinaryTree(14);
tree.left.left.left = new BinaryTree(1);
console.log(superbalanced(tree));