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
    // we will traverse the tree in order 
    // if the current node is not greater than or equal to previous node, we can break and return false 
    // if not, we'll return true 
    function inorder(node) {
        const nodes = [];
        if (node) {
            inorder(node.left);
            nodes.push(node.value);
            inorder(node.right);
        }
        for (let i = 0; i < nodes.length - 1; i += 1) {
            if (nodes[i] > nodes[i + 1]) return false;
        }
        return true;
    }
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
