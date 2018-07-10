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

  const counts = str.split('').reduce((acc, char) => {
    acc[char] ? delete acc[char] : acc[char] = 1;
    return acc;
  }, {});

  return Object.keys(counts) > 1;
  }



module.exports = permPalin; 