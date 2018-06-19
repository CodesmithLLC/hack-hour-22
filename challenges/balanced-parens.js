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

function balancedParens(input) {
  if (!input) { return true };
  const newArray = input.split('');
  const openBracket = ['[', '{', '(']
  const closeBracket = [']', '}', ')']
  let matchingBracket;
  const stack = [];
  let char;
  for (let i = 0; i < newArray.length; i += 1) {
    char = newArray[i];
    if (closeBracket.indexOf(char) > -1) {
      matchingBracket = openBracket[closeBracket.indexOf(char)];
      if (stack.length === 0 || (stack.pop() !== matchingBracket)) {
        return false
      }
    }
    else {
      stack.push(char)
    }
  }
  return stack.length === 0;
}

module.exports = balancedParens;
