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

  for (var j = 1; j < array.length; j ++) {
    if (array[j] <= array[j - 1]) return false;
  }
  
  return true;
}

// Naive 'one-liner' way that doesn't work - do you know why this doesn't work?
function validBST(tree) {
  return (tree !== undefined) &&
    (tree.left ? (tree.left.value <= tree.value && validBST(tree.left)) : true) &&
    (tree.right ? (tree.right.value > tree.value && validBST(tree.right)) : true);
}
