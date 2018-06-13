/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {

  const half = () => {
    return pow(base, power / 2);
  }
  const half1 = () => {
    return pow(base, (power - 1) / 2);
  }

  return power === 0 ? 1 :
    power === 1 ? base :
      power % 2 === 0 ? half() * half() :
        half1() * half1() * base;
}

console.log(pow(33, 3));
module.exports = pow;



  // if (power === 0) {
  //   return 1;
  // }
  // else if (power === 1) {
  //   return base;
  // }

  // if (power % 2 === 0) {
  //   let half = pow(base, power / 2);
  //   return half * half;
  // }
  // else {
  //   let half = pow(base, (power - 1) / 2);
  //   return half * half * base;
  // }