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

const permPalin = (str) => {
  let lcount = {}
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    letter = str[i];
    lcount[letter] = lcount[letter] || 0;
    lcount[letter]++;
  }
	for (let counter in lcount) {
    sum += lcount[counter] % 2;
  }
  return sum < 2;
}

module.exports = permPalin;