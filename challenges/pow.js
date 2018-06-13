/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power, count = 0, total = 1) {
   if(base === 0) {
      return 1;
   }
   if(count === power) {
      return total;
   }
   // let newBase = total * base;
   let newCount = count += 1;  
   let newTotal = total * base;
   return pow(base, power, newCount, newTotal);
}

// console.log(pow(3,3));

module.exports = pow;
