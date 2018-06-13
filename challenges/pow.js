/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  if (parseInt(power) !== power) return 'only integer exponents, please. this is javascript after all.'
  if (power === 0 || power === -0) return 1;
  if (power > 0) {
    return power === 1 ? base : base * pow(base, power - 1);
  }
  if (power < 0) {
    power = -1 * power;
    let result = power === 1 ? base : base * pow(base, power - 1);
    return 1 / result;
  }
} 

module.exports = pow;


