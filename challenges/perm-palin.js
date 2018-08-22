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
  const strTracker = {};
  for (let i = 0; i < str.length; i += 1) {
    const char = str.charAt(i);
    if (strTracker[char]) {
      strTracker[char] -= 1;
    } else {
      strTracker[char] = strTracker[char] + 1 || 0;
    }
  }
  const remainder = Object.values(strTracker).reduce((acc, val) => acc + val);
  return remainder <= 1;
}

module.exports = permPalin;
