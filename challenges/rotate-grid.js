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
    grid = grid.reduce((acc, current) =>{
        return acc.concat(current);
    });
    
    grid.forEach((element, index) => {
      if (!Array.isArray(element)){
        const array =[];
        array.push(grid[index + n - 1]);
        array.push(element);
        grid[index +n -1] = array;
        }
      else if (Array.isArray(element)){
        const array =[];
        array.push(grid[index + n - 1]);
        array.push(element[0]);
        grid[index +n -1] = array;
        grid[index] = element[1];
        }  
      });
    return grid;  
}

before=  [   [1, 2, 3], [4, 5, 6], [7, 8, 9]  ];

console.log(rotateGrid(before, 3));





module.exports = rotateGrid;
