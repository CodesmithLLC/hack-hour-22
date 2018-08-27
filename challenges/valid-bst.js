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

    //base case:
    if (this.left && this.right) return true;
    if (this.left > this.value) return false;
    if (this.right < this.value) return false;

    if (this.left !== null) {
        return validBST(this.left)
    }

    if (this.right !== null) {
        return validBST(this.right)
    }

}

function realValidBST(tree) {
    const inOrderArray = [];
    let i = 0;

    function inOrderToArray(tree, array, ) {
        if (!tree) return;
        inOrderToArray(tree.left, array);
        array[i++] = tree.value;
        inOrderToArray(tree.right, array);
    }

    inOrderToArray(tree, inOrderArray);

    for (let j = 1; j < inOrderArray.length; j++) {
        if (inOrderArray[j] <= inOrderArray[j - 1]) return false;
    }
    return true;
}


var traverse = function (root, cb) {
    if (root === null) {
        return;
    }
    traverse(root.left, cb);
    cb(root);
    traverse(root.right, cb);

};
var isValidBST = function (root) {
    var arr = [];
    traverse(root, function (node) {
        arr.push(node.val);
    });

    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] >= arr[i + 1]) {
            return false;
        }
    }
    return true;
};

function validBST(tree) {
    var array = [];
    var i = 0;
    function toArray(tree, array) {
        if (!tree) return;
        toArray(tree.left, array);
        array[i++] = tree.value;
        toArray(tree.right, array);
    }
    toArray(tree, array);
    for (var j = 1; j < array.length; j++) {
        if (array[j] <= array[j - 1]) return false;
    }
    return true;
}

//doesn't work
function validBST(tree) {
    return (tree !== undefined) &&
        (tree.left ? (tree.left.value <= tree.value && validBST(tree.left)) : true) &&
        (tree.right ? (tree.right.value > tree.value && validBST(tree.right)) : true);
}


//Give the recursive function starting values:

function checkBST(node) {
    // console.log(node.right);
    return isValidBST(node, null, null);
}


function isValidBST(node, min, max) {
    console.log(min, max);
    if (node === null) {
        return true;
    }
    if ((max !== null && node.val > max) || (min !== null && node.val < min)) {
        return false;
    }
    if (!isValidBST(node.left, min, node.val) || !isValidBST(node.right, node.val, max)) {
        return false;
    }
    return true;
}

var bst = new BinarySearchTree(8);
bst.insert(3);
bst.insert(1);
bst.insert(6);
bst.insert(10);
bst.insert(4);

module.exports = { BinaryTree: BinaryTree, validBST: validBST };
