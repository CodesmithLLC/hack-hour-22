function height(tree) {
  if (tree === null) return 0;
  return 1 + Math.max(height(tree.left), height(tree.right));
}

function superbalanced(tree) {
  if (tree === null) return true;
  return Math.abs(height(tree.left) - height(tree.right)) <= 1 && superbalanced(tree.left) && superbalanced(tree.right);
}
