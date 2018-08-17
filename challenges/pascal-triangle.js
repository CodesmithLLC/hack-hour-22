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

function memFact(num, cache) {
  if (num === 1 || num === 0) return 1;
  if (!cache[num]) {
    cache[num] = num * memFact(num-1, cache);
  }
  return cache[num];
}

function pascalTriangle(numRows) {
  const cache = {};
  const output = []
  for (let i = 0; i < numRows; i++) {
    const row = [];
    for (let n = 0; n <= i; n++) {
      let item = memFact(i, cache) / (memFact(n, cache) * memFact(i-n, cache))
      row.push(item)
    }
    output.push(row);
  } 
  return output; 
}

module.exports = pascalTriangle;


