/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
 if (power === 0) return 1;
 if (power > 0) {
   return power === 1 ? base : base * power(base, power - 1);
 }
 if (power < 0) {
   return power === -1 ? (1 / base) : (1 / (base * power(base + 1)));
 }

}

module.exports = pow;
