/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
    let commonDiv = Math.min(a, b);
    
    while(commonDiv > 1){
      if(a % commonDiv=== 0 && b % commonDiv=== 0) return commonDiv;
      commonDiv -= 1;
      }
    return commonDiv;
      
  }

module.exports = gcd;