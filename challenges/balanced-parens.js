/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */
function balancedParens(input){
	let count = 0;
	let letters = input.split('');
	if (0 !== letters.reduce((accumulator, letter) => {
		if (accumulator < 0) return accumulator;
		if (letter.indexOf('(') !== -1) {
			accumulator++;
		} else if (letter.indexOf(')') !== -1) {
			accumulator--;
		}
		return accumulator;
	}, 0)) {
		return false;
	};
	return true;
}


module.exports = balancedParens;
