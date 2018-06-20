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

const parensMap = {
  '(': ')',
  '[': ']',
  '{': '}',
};

function balancedParens(input) {
  const parensStack = [];
  for (let i = 0; i < input.length; i += 1) {
    if (input[i].match(/[{[(]/)) {
      parensStack.push(input[i]);
    } else if (input[i].match(/[})\]]/)) {
      if (input[i] !== parensMap[parensStack.pop()]) return false;
    }
  }
  return parensStack.length === 0;
}

module.exports = balancedParens;
