/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    if ( base === 1 ) return 1;
    if ( base === 0 ) return 0;
    return ( power > 0 ) ? base * pow ( base, power - 1 ) : 1;

}

console.log( pow(2, 4) );

module.exports = pow;
