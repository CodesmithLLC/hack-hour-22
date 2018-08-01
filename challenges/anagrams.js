/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example:
  * var result = anagrams('abc');
  * console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

function permutations(arr, length, word = [], output = []) {
	let temp;
	for (let i = 0; i < arr.length; i++) {
		temp = arr.slice();
		word.push(...temp.splice(i, 1));
		if (word.length === length) {
			output.push(word.join(''));
		} else {
			output.push(...permutations(temp, length, word, output));
		}
		word = [];
	}
	return output;
}

function anagrams(string) {
	const arr = string.split('')
	let anagrams = permutations(arr, arr.length);
	let unique = new Set(anagrams);
	return Array.from(unique)
}

module.exports = anagrams, permutations;

