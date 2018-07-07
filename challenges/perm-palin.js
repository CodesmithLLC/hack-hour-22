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
  // tally all characters in the string 
  // if str length is even, return if all counts even 
  // if str length is odd, return if it most one count is odd

  const counts = str.split('').reduce((acc, char) => {
    acc[char] ? acc[char] += 1 : acc[char] = 1;
    return acc;
  }, {});

  let oddCount = 0;

  for (let property in counts) {
    if (counts[property] % 2 === 1) oddCount += 1;
    if (oddCount > 1) return false;
    }

  return str.length % 2 === 0 ? oddCount === 0 : oddCount === 1;
  }



module.exports = permPalin; 