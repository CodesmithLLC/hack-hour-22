/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  if (a == 0 || b == 0) return 0;
  if (a === b) return a;
  if (a > b) return gcd(a - b, b);

  return gcd(a, b - a);
}

module.exports = gcd;