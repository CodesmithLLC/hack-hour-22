/* You are given a NxN grid of elements represented by a 2D array. The ith nested array represents 
 * the ith row in the grid.
 * 
 * Write a function to rotate the grid 90 degrees clockwise. 
 *
 * For example:     sampleGrid before:  [   [1, 2, 3],
 *                                          [4, 5, 6],
 *                                          [7, 8, 9]  ]
 *                  
 *                  rotateGrid(sampleGrid, 3);
 *                  
 *                  sampleGrid after:   [   [7, 4, 1],
 *                                          [8, 5, 2],
 *                                          [9, 6, 3]  ]
 *
 * BONUS: Do this in place
 */

function rotateGrid(grid, n) {
  const newGrid = grid;
  for (let i = 0; i < n; i++) {
    const middle = newGrid[1][1];
    const topRow = [newGrid[0][0], newGrid[1][0], newGrid[2][0]];
    const middleRow = [newGrid[2][1], middle, newGrid[0][1]];
    const bottomRow = [newGrid[0][2], newGrid[1][2], newGrid[2][2]];
    newGrid.splice(0);
    newGrid.push(topRow);
    newGrid.push(middleRow);
    newGrid.push(bottomRow);
  }

  return newGrid;
}

module.exports = rotateGrid;
