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
  countObj = {};
  for (char in str) {
    countObj[str[char]] ? countObj[str[char]] += 1 : countObj[str[char]] = 1;
  }
  const counts = Object.values(countObj).map(i => i % 2 === 0);

  if (str.length % 2 === 0) {
    return counts.includes(false);
  } else {
    return counts.includes(false);
  }
}

module.exports = permPalin;

// permPalin('cbcb'); // => true
// permPalin('cbac'); // => false
