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
  if (typeof numRows !== 'number' || numRows < 1) return [];
  const output = [[1]];
  for (let i = 1; i < numRows; i += 1) {
    const temp = Array(i + 1)
      .fill(1)
      .map((val, idx) => {
        const parent = output[i - 1];
        if (parent[idx - 1] && parent[idx]) {
          return parent[idx - 1] + parent[idx];
        }
        return val;
      });

    output.push(temp);
  }
  return output;
}

module.exports = pascalTriangle;
