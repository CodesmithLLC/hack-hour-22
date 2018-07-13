/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
    const big = a > b ? a : b;
    const small = a < b ? a : b;
    const limit = Math.sqrt(big);
    let arr = [];
// find what the numbers are divisible by
// 
    for ( let x = 0; x < small; x++){

        if (big % x === 0 && small % x === 0){
            
            arr.push(x);
            
        }
        
    }

    return arr.pop();
}

console.log(gcd(35,70))
module.exports = gcd;