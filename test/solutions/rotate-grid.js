// O(n ^ 2) time, O(n) space
function rotateGrid(grid, n) {
  var newGrid = [];
  
  for (var i = 0; i < n; i ++) {
    var inner = [];
    
    for (var j = n - 1; j >= 0; j--) {
      inner.push(grid[j][i]);
    }
    
    newGrid.push(inner);
  }
  
  return newGrid;
}

// O(n ^ 2) time, O(1) space
function rotateGrid(grid, n) {
  
  for (var i = 0; i < Math.floor(n / 2); i ++) {
    var first = i;
    var last = n - 1 - i;
    
    for (var j = first; j < last; j ++) {
      var adjust = j - first;
      var top = grid[first][j];
      
      // left -> top
      grid[first][j] = grid[last-adjust][first];
      
      // bottom -> left
      grid[last-adjust][first] = grid[last][last-adjust];
      
      // right -> bottom
      grid[last][last-adjust] = grid[j][last];
      
      // top -> right
      grid[j][last] = top;
    }
  }
  return grid;
}
