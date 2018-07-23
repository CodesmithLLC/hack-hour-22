/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
   let max = Math.max(a, b);
   let gcd = -Infinity;

   for (let i = 0; i < max / 2; i++) {
      if (a % i === 0 && b % i === 0) {
         if (i > gcd) gcd = i;
      }
   }

   return gcd;
}

module.exports = gcd;