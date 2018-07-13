/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function factorize(num) {
  let i = 2;
  let remainder = num;
  const factors = [];
  while (remainder > 1) {
    if (remainder % i === 0) {
      factors.push(i);
      remainder /= i;
    } else {
      i += 1;
    }
  }
  return factors;
}

const multiply = array => array.reduce((a, b) => a * b);

function gcd(a, b) {
  if (!a || !b || typeof a !== 'number' || typeof b !== 'number') return 0;

  const factors = factorize(a);
  const common = [];
  let remainder = b;
  while (factors.length && remainder > 1) {
    const temp = factors.shift();
    if (remainder % temp === 0) {
      common.push(temp);
      remainder /= temp;
    }
  }

  return common.length ? multiply(common) : 1;
}

module.exports = gcd;
