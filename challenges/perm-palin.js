/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * - permPalin('abab') => true
 * - permPalin('cbaba') => true
 * - permPalin('cbac') => false
 * - permPalin('a') => true
 *
 */

function permPalin(str) {
  const counts = Object.create(null);
  for (let i = 0; i < str.length; i += 1) {
    counts[str[i]] = counts[str[i]] + 1 || 1;
  }
  return Object.keys(counts)
    .filter(char => counts[char] % 2 === 1)
    .length < 2;
}

module.exports = permPalin;
