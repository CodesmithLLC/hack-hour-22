/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let gcd = Math.min(a, b);
  while (gcd) {
    if (!(a % gcd || b % gcd)) break;
    gcd -= 1;
  }
  return gcd;
}

console.log(gcd(10, 8));
console.log(gcd(10, 9));
console.log(gcd(10, 5));

module.exports = gcd;
