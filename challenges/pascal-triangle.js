/*
  Construct Pascal's Triangle up to n levels deep, starting from n = 1. Each row
  is represented as an array of numbers.

  https://en.wikipedia.org/wiki/Pascal%27s_triangle

  e.g.
  pascalTriangle(1):
  [[1]]

  pascalTriangle(2):
  [
    [1],
    [1, 1]
  ]

  pascalTriangle(3) :
  [
    [1],
    [1,1],
    [1,2,1]
  ]

  pascalTriangle(6) :
  [
    [1],
    [1,1],
    [1,2,1],
    [1,3,3,1],
    [1,4,6,4,1],
    [1,5,10,10,5,1]
  ]
*/

function pascalTriangle(numRows) {
  // make an array with [1], loop over two levels of start array
  const start = [[1]];
    // start at the end of the array 
  for (let i = start.length - 1; i <= numRows - 2; i += 1) {
    const row = [];
      for (let j = 0; j < start[i].length; i += 1) {
          // if inner array index is 0, push 1
        if (j === 0) {
          row[0] = 1;
          // if at the end of the array, add a 1
        } else if (j === start[i].length) {
          row[i] = 1;
          // calculate the sum of the two values of the indexes 
        } else {
          row[i] = start[i][j - 1] + start[i][j];
        }
      }
    start.push(row);
  }
  return start;
}

module.exports = pascalTriangle;
