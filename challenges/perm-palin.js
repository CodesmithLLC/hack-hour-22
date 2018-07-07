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
	let letters = str.split('');
	let unique = Array.from(new Set(letters));
	return (unique.length === Math.ceil(letters.length / 2));
}

module.exports = permPalin;

