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

function nextArray(array) {
  const result = [1];
  for (let i = 1; i < array.length; i++) {
    result.push(array[i - 1] + array[i]);
  }
  result.push(1);
  
  return result;
}


function pascalTriangle(numRows) {
  let curr = [1];
  const results = [curr];
  
  for (let i = 1; i < numRows; i++) {
    curr = nextArray(curr);
    results.push(curr);
  }
  
  return results;
}

// console.log(pascalTriangle(6));

module.exports = pascalTriangle;
