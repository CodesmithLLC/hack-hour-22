/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
  return str
    ? str
      .split('')
      .sort()
      .reduce((acc, x, i, arr) => {
        if (!acc.length || arr[i] !== acc[acc.length - 1][0]) {
          acc.push([arr[i]]);
        } else {
          acc[acc.length - 1].push(arr[i]);
        }
        return acc;
      }, [])
      .filter(arr => arr.length % 2).length < 2
    : true;
}
console.log(permPalin());

permPalin('abab'); /*  => true */
console.log('​ permPalin(abab)', permPalin('abab'));
permPalin('cbaba'); /*  => true */
console.log('​ permPalin(cbaba)', permPalin('cbaba'));
permPalin('cbac'); /*  => false */
console.log('​permPalin(cbac)', permPalin('cbac'));
permPalin('a'); /*  => true */
console.log('​ permPalin(a)', permPalin('a'));

module.exports = permPalin;
