/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  if (a > b)
    return GCD(a, b);
  else
    return GCD(b, a);
}

function GCD(a, b) {
  const r = a % b;
  
  if (r === 0)
    return b;
  else
    return GCD(b, r);
}

// console.log(gcd(40, 16));
// console.log(gcd(18, 42));

module.exports = gcd;
