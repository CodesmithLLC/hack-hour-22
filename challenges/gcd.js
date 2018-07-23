/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let lower = Math.min(a, b);
  let higher = Math.max(a, b);
  let commonDenominators = [];
  for (let i = 0; i <= lower; i++) {
    if (lower % i === 0 && higher % i === 0) commonDenominators.push(i);
  }
  return commonDenominators[commonDenominators.length -1];
}

module.exports = gcd;