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
 * BONUS: Do this in place 20 10 00, 21 11 01, 22 12 02
 * 
 */
function rotateGrid(grid, n) {
  let output = [];
  let temp = [];

  for (let i = 0; i < n; i++) {
    for (let j = n - 1; j >= 0; j--) {
      temp.push(grid[j][i]);
    }
    output.push(temp);
    temp = [];
  }
  return output;
}

module.exports = rotateGrid;


let sampleGrid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(rotateGrid(sampleGrid, 3));