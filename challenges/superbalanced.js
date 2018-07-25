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

// function generate() {
//   const a = new BinaryTree(5);
//   a.left = new BinaryTree(3);
//   a.left.left = new BinaryTree(2);
//   a.left.right = new BinaryTree(4);
//   a.right = new BinaryTree(7);
//   a.right.left = new BinaryTree(6);
//   a.right.right = new BinaryTree(8);
//   return a;
// }

function superbalanced(tree, top = true) {
  if (!tree) return -1;

  const leftHeight = superbalanced(tree.left, false);
  if (leftHeight === false) return false;
  const rightHeight = superbalanced(tree.right, false);
  if (rightHeight === false) return false;

  if (Math.abs(leftHeight - rightHeight) <= 1) {
    return top ? true : Math.max(leftHeight, rightHeight) + 1;
  }
  return false;
}

module.exports = { BinaryTree, superbalanced };
