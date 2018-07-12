/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be < its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 * Assume that each value in the tree is unique.
 */


function BinaryTree(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

function validBST(tree) {
  const validLeft = tree.left === null || tree.left.value < tree.value;
  const validRight = tree.right === null || tree.right.value > tree.value;
  const checkLeft = tree.left === null || validBST(tree.left);
  const checkRight = tree.right === null || validBST(tree.right);
  return validLeft && validRight && checkLeft && checkRight;
}

module.exports = { BinaryTree, validBST };
