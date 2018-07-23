// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive).
// For example: countTwos(3) should be 1 because there are no 2s in the number one. There is One 2 in the number two and no 2s in the number three.
// Each 2 should be counted. For instance,  the number 2222 has four 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483

function count(num) {
  const matches = String(num).match(/2/g);
  return matches ? matches.length : 0;
}

function countTwos(num) {
  // Handle easy part numerically, run the rest
  const order = String(num).length;
  const quickCalc = (order - 1) * (10 ** (order - 2));
  const newBase = 10 ** (order - 1);

  const checks = [];
  for (let i = 0; i < num - newBase; i += 1) {
    checks.push(i + 1 + newBase);
  }

  return quickCalc + checks.reduce((acc, curr) => acc + count(curr), 0);
}

// 0-9: 1 --> 1
// 0-99: 10 * (1) + 10 --> 20
// 0-1000: 10 * (10 * (1) + 10) + 100 --> 300
// 0-10000: 10 * (10 * (10 * (1) + 10) + 100) + 1000 --> 4000
// (String(input).length - 1) * (10 ** (String(input).length - 2))

module.exports = countTwos;
