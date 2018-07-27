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
	//define an array stack
	const stack = [];
	//define object brackets with keys as open parans and values as its corresponding closing parens and values as its corresponding closed parens
	const brackets = {
		'(' : ')',
		'[' : ']',
		'{' : '}',
	};
	for (let i = 0; i < input.length; i++) {
		// if curr element is a key on the brackets obj, push the corresponding value into the stack 
		if (brackets[input[i]]) stack.push(brackets[input[i]]);
		// if curr eleemnt is closed parens && stack.pop() is not equal to curr element, return false
		if ([')', ']', '}'].includes(input[i]) && stack.pop() !== input[i]) return false;
	}
	// return boolean if stack length is equal to 0
	return stack.length === 0;
}


module.exports = balancedParens;
