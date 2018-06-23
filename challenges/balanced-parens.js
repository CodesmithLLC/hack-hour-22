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

const arrayPalindrome = (arr) => {
  if (arr.length <= 2) {
    return arr[0] === arr[arr.length - 1];
  } else {
    return arr[0] === arr[arr.length - 1] && arrayPalindrome(arr.slice(1, -1));
  }
}

function balancedParens(input){
  const rightBrackets = ['(', '{', '['];
  const leftBrackets = []
  const bracketArray = input.split('').filter(x => brackets.includes(x));
  return arrayPalindrome(bracketArray);
}

module.exports = balancedParens;
