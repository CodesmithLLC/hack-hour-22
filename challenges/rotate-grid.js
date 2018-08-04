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
  for (let j = 0; j < n - 1; j += 1) {
    let startRow = 0;
    let startColumn = 0;
    let endRow = n - 1;
    let endColumn = n - 1;
    let temp = grid[1][0];
    while (startColumn <= endColumn && startRow <= endRow) {
      // Shift first row
      for (let i = startColumn; i <= endColumn; i += 1) {
        const innerTemp = grid[startRow][i];
        grid[startRow][i] = temp;
        temp = innerTemp;
      }
      startRow += 1;
      // Shift last column
      for (let i = startRow; i <= endRow; i += 1) {
        const innerTemp = grid[i][endColumn];
        grid[i][endColumn] = temp;
        temp = innerTemp;
      }
      endColumn -= 1;
      // Shift bottom row
      for (let i = endColumn; i >= startColumn; i -= 1) {
        const innerTemp = grid[endRow][i];
        grid[endRow][i] = temp;
        temp = innerTemp;
      }
      endRow -= 1;
      // Shift first column
      for (let i = endRow; i >= startRow; i -= 1) {
        const innerTemp = grid[i][startColumn];
        grid[i][startColumn] = temp;
        temp = innerTemp;
      }
      startColumn += 1;
    }
  }
  return grid;
};

module.exports = rotateGrid;

console.log(rotateGrid([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]],4));

