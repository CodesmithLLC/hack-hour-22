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
  const brackets = ['{', '}', '[', ']', '(', ')'];
  const bracketsObj = { '{': '}', '[': ']', '(': ')' };
  const containedBrackets = input.split('').filter(char => brackets.includes(char));
  const { length } = containedBrackets;
  if ((length % 2) > 0) return false;
  while (containedBrackets.length > 1) {
    const elem = containedBrackets[0];
    if (bracketsObj[elem] === containedBrackets[1]) {
      containedBrackets.shift();
      containedBrackets.shift();
      break;
    } else if (bracketsObj[elem] === containedBrackets[length - 1]) {
      containedBrackets.shift();
      containedBrackets.pop();
      break;
    } else {
      return false;
    }
  }
  return true;
}

module.exports = balancedParens;
