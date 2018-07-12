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
	let leftVal = true;
	let rightVal = true;
	if (tree.left !== null) {
		if (tree.value < tree.left.value) return false;
		leftVal = validBST(tree.left)
	}
	if (tree.right !== null) {
		if (tree.value > tree.right.value) return false;
		rightVal = validBST(tree.right)
	}
	return (leftVal && rightVal)
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
