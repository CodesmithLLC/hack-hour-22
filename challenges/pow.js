/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  if (power === 0)
    return 1;
  else if (power < 0)
    return 1 / powPositive(base, -power);
  else
    return powPositive(base, power);
}

function powPositive(base, power) {
  // base case of 1
  if (power === 1) return base;
  
  // even case
  if (power % 2 === 0) {
    const half = power / 2;
    const sqrt = powPositive(base, half);
    
    return sqrt * sqrt;
  }
  // odd case
  else {
    const half = Math.floor(power / 2);
    const sqrt = powPositive(base, half);
    
    return sqrt * sqrt * base;
  }
}

/*
console.log(pow(-4, 0)); // 1
console.log(pow(-4, 1)); // -4
console.log(pow(-4, 3)); // -64
console.log(pow(-4, 10)); // 1048576
console.log(pow(-4, 11)); // -4194304

console.log(pow(2, -1)); // 0.5
console.log(pow(2, -4)); // 0.0625
console.log(pow(2, -13)); // 0.00012207031
*/

module.exports = pow;
